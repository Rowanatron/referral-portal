import { SET_SKILL_SET_LIST, SET_STATUS_LIST, SET_MEETING_ROOM_LIST, SET_INTERVIEWER_LIST } from "../actions/prefillActions";

const initialState = {
  skillSet: [],
  status: [],
  meetingRooms:[],
  interviewers:[]
};

function prefillReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SKILL_SET_LIST:
      return {
        ...state,
        skillSet: action.data
      };
    case SET_STATUS_LIST:
      return {
        ...state,
        status: action.data
      };
    case SET_MEETING_ROOM_LIST:
      return {
        ...state,
        meetingRooms:action.data
      };
      case SET_INTERVIEWER_LIST:
      return {
        ...state,
        interviewers:action.data
      };
    default: {
      return state;
    }
  }
}

export default prefillReducer;
