import { GET_INTERVIEWER_LIST, setInterviewerList } from "../actions/prefillActions";

const getInterviewerList = store => next => async action => {
  next(action);

  if (action.type !== GET_INTERVIEWER_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch("api/interviewers.json")
      .then(data => data.json())
      .then(response => {
        return response;
      });

    if (data) {
      dispatch(setInterviewerList(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getInterviewerList };
