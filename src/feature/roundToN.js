// 任意の値に切り上げるor切り捨てる関数

export const roundToN = (value, N, isUp) => {
  if (isUp) {
    return Math.ceil(value / N) * N;
  } else {
    return Math.floor(value / N) * N;
  }
};
