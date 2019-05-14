import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Calender from "../components/Calender";
import {
  getAvailabilityOverview,
  getScheduleByDate
} from "../actions/calenderActions";

const mapStateToProps = state => ({
  availabilityOverview: state.calenderReducer.availabilityOverview,
  schedules: state.calenderReducer.schedule
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAvailabilityOverview,
      getScheduleByDate
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calender);
