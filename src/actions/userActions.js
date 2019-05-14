export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_LOGOUT_USER = "LOGIN_LOGOUT_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const login = user => {
  return {
    type: LOGIN_USER,
    user
  };
};

export const loginLogoutStatus = status => {
  return {
    type: LOGIN_LOGOUT_USER,
    status
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER
  };
};
