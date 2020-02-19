import FETCH_INIT from "./actionTypes";

export default dataType => {
  return {
    type: FETCH_INIT,
    dataType
  };
};
