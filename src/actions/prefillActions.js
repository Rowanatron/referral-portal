export const GET_STATUS_LIST = "GET_STATUS_LIST";
export const SET_STATUS_LIST = "SET_STATUS_LIST";
export const GET_SKILL_SET_LIST = "GET_SKILL_SET_LIST";
export const SET_SKILL_SET_LIST = "SET_SKILL_SET_LIST";
export const GET_MEETING_ROOM_LIST = "GET_MEETING_ROOM_LIST";
export const SET_MEETING_ROOM_LIST = "SET_MEETING_ROOM_LIST";
export const GET_INTERVIEWER_LIST = "GET_INTERVIEWER_LIST";
export const SET_INTERVIEWER_LIST = "SET_INTERVIEWER_LIST";

export const getSkillSetList = () => {
  return {
    type: GET_SKILL_SET_LIST
  };
};

export const setSkillSetList = data => {
  return {
    type: SET_SKILL_SET_LIST,
    data
  };
};

export const getStatusList = () => {
  return {
    type: GET_STATUS_LIST
  };
};

export const setStatusList = data => {
  return {
    type: SET_STATUS_LIST,
    data
  };
};

export const getMeetingRoomList = data => {
  return {
    type: GET_MEETING_ROOM_LIST,
    data
  };
};

export const setMeetingRoomList = data => {
  return {
    type: SET_MEETING_ROOM_LIST,
    data
  };
};

export const getInterviewerList = data => {
  return {
    type: GET_INTERVIEWER_LIST,
    data
  };
};

export const setInterviewerList = data => {
  return {
    type: SET_INTERVIEWER_LIST,
    data
  };
};

