import { createContext, useContext } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
interface AuthorizationState {
  token: string | null;
  status: "login" | "logout";
}

interface AuthorizationModel {
  token: string | null;
}

export const AuthorizationContextInitValue: AuthorizationState = {
  token: null,
  status: "logout",
};

export const AuthorizationContext = createContext<AuthorizationState>(
  AuthorizationContextInitValue
);

export function useAuthorization() {
  const _context = useContext(AuthorizationContext);
  const [auth_cookie, set_auth_cookie, del_auth_cookie] = useCookies();
  const _handleLogin = async (passwd: string) => {
    const _auth_type: AuthorizationModel = (
      await axios({
        method: "GET",
        withCredentials:true,
        url: "http://127.0.0.3:8080/test-auth-type.json",
        params: {
          passwd: passwd,
        },
        responseType: "json",
      })
    ).data;
    const _auth_state = {
      token: _auth_type.token,
      status: _auth_type != null ? "login" : "logout",
    };
    if (_auth_state.status === "login")
      set_auth_cookie("token", _auth_state.token, {
        expires: new Date("20220817"),
      });
    return _auth_state;
  };

  const _handleLogout = () => {
    _context.status = "logout";
    _context.token = null;
  };

  const _auth_ping = () => {};

  return {
    token: _context.token,
    status: _context.status,
    logout: _handleLogout,
    login: _handleLogin,
    authPing: _auth_ping,
  };
}