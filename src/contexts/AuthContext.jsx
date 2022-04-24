import { useContext, useReducer, createContext } from "react";
import { TYPES } from "../actions/auth";
import { authReducer, initialState } from "../reducers/authReducer";

export const AuthContext = createContext();
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logout = () => {
    dispatch({ type: TYPES.LOGOUT });
  };

  const setAuth = ({ jwt }) => {
    dispatch({ type: TYPES.SET_AUTH, payload: { jwt } });
  };

  const login = ({ usename, password }) => {
    // petición http axios.post({username,password}) el server responde un token
    // una vez que se ejecute el método del login del context este realiza una petición http al backend / authentication
    // el back verifica el password y usuario enviados, y si son corrects genera un jwt
    // si los datos son incorrectos el back devuelve un jwt:null

    const { jwt } = {
      ok: true,
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    };

    setAuth({ jwt });
    return jwt;
  };

  return <Provider value={{ setAuth, login, logout }}>{children}</Provider>;
};
