export const STORE_AVAILABILITY_OVERVIEW = "STORE_AVAILABILITY_OVERVIEW";
export const GET_AVAILABILITY_OVERVIEW = "GET_AVAILABILITY_OVERVIEW";
export const GET_SCHEDULE_BY_DATE = "GET_SCHEDULE_BY_DATE";
export const STORE_SCHEDULE_FOR_DATE = "STORE_SCHEDULE_FOR_DATE";

export const storeAvailabilityOverview = data => {
  return {
    type: STORE_AVAILABILITY_OVERVIEW,
    data
  };
};

export const getAvailabilityOverview = () => {
  return {
    type: GET_AVAILABILITY_OVERVIEW
  };
};

export const getScheduleByDate = date => {
  return {
    type: GET_SCHEDULE_BY_DATE,
    date
  };
};

export const storeScheduleForDate = data => {
  return {
    type: STORE_SCHEDULE_FOR_DATE,
    data
  };
};
