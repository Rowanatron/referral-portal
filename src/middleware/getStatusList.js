import { GET_STATUS_LIST, setStatusList } from "../actions/prefillActions";

const getStatusList = store => next => async action => {
  next(action);

  if (action.type !== GET_STATUS_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch("http://localhost:8087/candidates/status")
      .then(data => data.json())
      .then(response => {
        return response;
      });

    if (data) {
      dispatch(setStatusList(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getStatusList };
