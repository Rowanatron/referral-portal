import store from "../store";
import { loginLogoutStatus } from "../actions/userActions";

const dispatch = store.dispatch;

export const checkStatus = () => {
  dispatch(
    loginLogoutStatus(
      window.sessionStorage.getItem("referralPortal-loginStatus")
    )
  );
};
