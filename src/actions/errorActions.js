export const GENERAL_ERROR = "GENERAL_ERROR";


export const setGeneralError = error => {
  return {
    type: GENERAL_ERROR,
    error
  };
};
