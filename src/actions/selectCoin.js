import SELECT_COIN from "./actionTypes";

export default coin => {
  return {
    type: SELECT_COIN,
    coin
  };
};
