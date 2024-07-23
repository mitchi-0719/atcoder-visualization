export const convertContestData = (data) => {
  const convertedData = {};
  data.forEach(({ id, start_epoch_second, duration_second }) => {
    convertedData[id] = {
      startEpochSecond: start_epoch_second,
      durationSecond: duration_second,
    };
  });

  return convertedData;
};
