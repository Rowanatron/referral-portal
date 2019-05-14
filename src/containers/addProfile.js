import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AddProfile from "../components/AddProfile";
import { getSkillSetList, getStatusList } from "../actions/prefillActions";

const mapStateToProps = state => ({
  skillSets: state.prefillReducer.skillSet,
  statusList: state.prefillReducer.status
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSkillSetList, getStatusList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProfile);
