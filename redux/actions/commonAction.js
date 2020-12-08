import { SET_JWT } from "../types";

export function setJwtAction() {
  return async (dispatch) => {
    const jwt = "este el jwt";
    localStorage.setItem("jwt", jwt);
    dispatch({ type: SET_JWT, payload: jwt });
  };
}
