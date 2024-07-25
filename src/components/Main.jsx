import { useContext } from "react";
import { Box } from "@mui/material";
import { BarChartRace } from "./barChartRace/BarChartRace";
import { Error, Header, Loading } from "../common";
import { DataContext } from "../context/DataContext";

export const Main = () => {
  const { isLoading, error } = useContext(DataContext);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Box>
          <BarChartRace />
        </Box>
      )}
    </>
  );
};
