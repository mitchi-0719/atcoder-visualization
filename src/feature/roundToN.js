export const roundToN = (value, n, isUp) => {
  if (isUp) {
    return Math.ceil(value / n) * n;
  } else {
    return Math.floor(value / n) * n;
  }
};
