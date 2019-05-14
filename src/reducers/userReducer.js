import { LOGIN_LOGOUT_USER, LOGOUT_USER } from "../actions/userActions";

const initialState = {
  loginStatus: false
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOGOUT_USER:
      /* if (action.loginStatus !== false) {
        window.location.hash = "/";
      } else {
        window.location.hash = "dashboard";
      }*/
      return {
        ...state,
        loginStatus: action.status
      };
    case LOGOUT_USER:
      window.sessionStorage.removeItem("referralPortal-loginStatus");
      return {
        loginStatus: false
      };
    default: {
      return state;
    }
  }
}

export default userReducer;
