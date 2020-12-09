import { combineReducers } from "redux";
import commmonReducer from "./commmonReducer";
import estadisticasReducer from "./EstadisticasReducer";

export default combineReducers({
  common: commmonReducer,
  estadisticas: estadisticasReducer,
});
