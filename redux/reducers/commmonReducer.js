import { SET_JWT } from "../types";

const initialState = {
  loading: true,
  jwt: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_JWT:
      return {
        ...state,
        jwt: action.payload,
      };
    default:
      return state;
  }
}
