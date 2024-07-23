import { useEffect, useState } from "react";
import { fetchDemoData } from "../api/fetchDemoData";
import { convertData } from "../feature/convertData";
import { Box } from "@mui/material";
import { BarChartRace } from "./barChartRace/BarChartRace";
import { Error, Header, Loading } from "../common";

export const Main = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const asyncFn = async () => {
      fetchDemoData()
        .then((res) => convertData(res))
        .then((data) => {
          setData(data);
        })
        .catch((e) => {
          setError(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    asyncFn();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Box>
          <BarChartRace data={data} />
        </Box>
      )}
    </>
  );
};
