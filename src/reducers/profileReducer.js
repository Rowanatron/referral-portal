import { SET_PROFILES } from "../actions/profileActions";

const initialState = {
  profiles: false
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.data
      };
    default: {
      return state;
    }
  }
}

export default profileReducer;
