import { useContext } from "react";
import { Error, Loading } from "../../common";
import { BarChartRace } from "./BarChartRace";
import { Box } from "@mui/material";
import { DataContext } from "../../context/DataContext";
import { BarChartSetting } from "./BarChartSetting";

export const BarChartRaceMain = () => {
  const { isLoading, error } = useContext(DataContext);

  return (
    <Box flex={1}>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Box display="flex" justifyContent="space-around">
          <BarChartSetting />
          <BarChartRace />
        </Box>
      )}
    </Box>
  );
};
