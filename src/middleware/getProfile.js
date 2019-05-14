
import { GET_PROFILES, setProfiles } from "../actions/profileActions";

const getProfile = store => next => async action => {
  next(action);

  if (action.type !== GET_PROFILES) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch("http://localhost:8087/candidates/")
      .then(data => data.json())
      .then(response => {
        return response;
      });

    if (data) {
      dispatch(setProfiles(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getProfile };
