export const nFormatter = (num) => {
  let newNumber;
  if (num >= 1000000000) {
    newNumber = `${(num / 1000000000).toFixed(2)}B`;
  } else if (num >= 100000) {
    newNumber = (num / 1000000).toFixed(2) + "M";
  } else {
    newNumber = num.toFixed(2);
  }
  return newNumber;
};
