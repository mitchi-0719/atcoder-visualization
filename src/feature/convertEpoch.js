export const convertEpochToDate = (epochSecond) => {
  const date = new Date(epochSecond * 1000);

  return date.toLocaleString();
};
