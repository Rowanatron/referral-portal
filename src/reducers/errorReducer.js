import {
  GENERAL_ERROR
} from "../actions/errorActions";

const initialState = {
  generalError: "",
};

function calenderReducer(state = initialState, action) {
  switch (action.type) {
    case GENERAL_ERROR:
      return {
        ...state,
        generalError: action.error
      };
    default: {
      return state;
    }
  }
}

export default calenderReducer;
