import { SET_ESTADISTICAS, TOGGLE_LOADING } from "../types";
import axios from "../../components/axiosconfig";
export function downloadEstadisticasAction() {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_LOADING });
    try {
      const { data: VProductos } = await axios.post(
        "/ventas/productos?cliente=Chillis"
      );
      /**Parseamos la informacions */
      let arrayVP = [];
      for (let item in VProductos) {
        arrayVP.push({
          name: item,
          amount: VProductos[item],
        });
      }
      const { data: VCategoria } = await axios.post(
        "/ventas/categoria?cliente=Chillis"
      );
      /**Especificar el color */
      let arrayVC = [];
      for (let item in VCategoria) {
        arrayVC.push({
          name: item,
          amount: VCategoria[item],
        });
      }
      const { data: VLProductos } = await axios.post(
        "/volumen/productos?cliente=Chillis"
      );
      let arrayVLP = [];
      for (let item in VLProductos) {
        arrayVLP.push({
          name: item,
          amount: VLProductos[item],
        });
      }
      const { data: VLCategoria } = await axios.post(
        "/volumen/categoria?cliente=Chillis"
      );
      let arrayVLC = [];
      for (let item in VLCategoria) {
        arrayVLC.push({
          name: item,
          amount: VLCategoria[item],
        });
      }
      dispatch({
        type: SET_ESTADISTICAS,
        payload: {
          ventaProductos: arrayVP,
          volumenProductos: arrayVLP,
          ventaCategoria: arrayVC,
          volumenCategoria: arrayVLC,
        },
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: TOGGLE_LOADING });
  };
}
