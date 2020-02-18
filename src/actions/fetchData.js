import FETCH_DATA from "./actionTypes";

export default url => {
  return {
    type: FETCH_DATA,
    url
  };
};
