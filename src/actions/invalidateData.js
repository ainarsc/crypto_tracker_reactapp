import INVALIDATE from "./actionTypes";

export default dataType => {
  return {
    type: INVALIDATE,
    dataType
  };
};
