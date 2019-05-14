import {
  STORE_AVAILABILITY_OVERVIEW,
  STORE_SCHEDULE_FOR_DATE
} from "../actions/calenderActions";

const initialState = {
  availabilityOverview: [],
  schedule: []
};

function calenderReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_AVAILABILITY_OVERVIEW:
      return {
        ...state,
        availabilityOverview: action.data
      };
    case STORE_SCHEDULE_FOR_DATE:
      return {
        ...state,
        schedule: action.data
      };
    default: {
      return state;
    }
  }
}

export default calenderReducer;
