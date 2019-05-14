import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import App from "../App";
import { setProfiles, getProfiles } from "../actions/profileActions";
import { getStatusList } from "../actions/prefillActions";
import { logout } from "../actions/userActions";
import { checkStatus } from "../utility/checkLoginStatus";
checkStatus();

const mapStateToProps = state => ({
  profiles: state.profileReducer.profiles,
  statusList: state.prefillReducer.status,
  loginStatus: state.userReducer.loginStatus,
  generalError: state.errorReducer.generalError
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProfiles,
      setProfiles,
      getStatusList,
      logout
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
