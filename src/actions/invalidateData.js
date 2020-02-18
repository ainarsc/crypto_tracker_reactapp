import INVALIDATE from "./actionTypes";

export default url => {
  return {
    type: INVALIDATE,
    url
  };
};
