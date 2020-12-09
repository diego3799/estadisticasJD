import { SET_ESTADISTICAS } from "../types";
const initialState = {
  ventaProductos: [],
  volumenProductos: [],
  ventaCategoria: [],
  volumenCategoria: [],
};

export default function estadisticasReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ESTADISTICAS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
