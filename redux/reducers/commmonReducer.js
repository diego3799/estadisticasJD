import { SET_JWT, TOGGLE_LOADING } from "../types";

const initialState = {
  loading: true,
  jwt: "",
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_JWT:
      return {
        ...state,
        jwt: action.payload,
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
}
