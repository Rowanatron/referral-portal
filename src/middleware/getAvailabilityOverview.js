import {
  GET_AVAILABILITY_OVERVIEW,
  storeAvailabilityOverview
} from "../actions/calenderActions";

const getAvailabilityOverview = store => next => async action => {
  next(action);

  if (action.type !== GET_AVAILABILITY_OVERVIEW) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch("api/availabilityOverview.json")
      .then(data => data.json())
      .then(response => {
        return response;
      });

    if (data) {
      dispatch(storeAvailabilityOverview(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getAvailabilityOverview };
