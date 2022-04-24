import { TYPES } from "../actions/auth";

export const initialState = {
  isLoggedIn: false,
  jwt: null, // se envia en cada request http (cebeceraS)
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_AUTH: {
      return {
        isLoggedIn: true,
        jwt,
      };
    }
    case TYPES.LOGOUT: {
      return {
        initialState,
      };
    }
    default:
      return state;
  }
};
