import { LOGIN_USER, loginLogoutStatus } from "../actions/userActions";
import { setGeneralError } from "../actions/errorActions";

const loginUser = store => next => async action => {
  next(action);

  if (action.type !== LOGIN_USER) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch("api/loginStatus.json")
      .then(data => data.json())
      .then(response => {
        return response;
      });

    if (data) {
      if (data.loginStatus) {
        sessionStorage.setItem("referralPortal-loginStatus", data.loginStatus);
        window.location = "/";
      }else {
        dispatch(setGeneralError(data.comment))
      }
      dispatch(loginLogoutStatus(data.loginStatus));
    }
  } catch (e) {
    console.error(e);
  }
};

export { loginUser };
