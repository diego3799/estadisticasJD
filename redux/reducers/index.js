import { combineReducers } from "redux";
import commmonReducer from "./commmonReducer";

export default combineReducers({
  common: commmonReducer,
});
