import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ViewProfiles from "../components/ViewProfiles";
import { getStatusList, getMeetingRoomList, getInterviewerList } from "../actions/prefillActions";

const mapStateToProps = state => ({
  profiles: state.profileReducer.profiles,
  statusList: state.prefillReducer.status,
  meetingRooms: state.prefillReducer.meetingRooms,
  interviewers: state.prefillReducer.interviewers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getStatusList, getMeetingRoomList, getInterviewerList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProfiles);
