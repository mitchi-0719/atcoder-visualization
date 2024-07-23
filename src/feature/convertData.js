import { fetchContestData } from "../api/fetchDemoData";
import { convertContestData } from "./convertContestData";

export const convertData = async (data) => {
  const contestData = convertContestData(await fetchContestData());

  return await data.map(
    ({ epoch_second, problem_id, contest_id, language }) => {
      const isDuringContest =
        problem_id in contestData &&
        contestData[problem_id].start_epoch_second <=
          epoch_second <=
          contestData[problem_id].start_epoch_second +
            contestData[problem_id].duration_second;

      return {
        epochSecond: epoch_second,
        problemId: problem_id,
        contestId: contest_id,
        language: language,
        isDuringContest: isDuringContest,
      };
    }
  );
};
