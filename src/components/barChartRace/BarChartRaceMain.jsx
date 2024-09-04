import { useContext } from "react";
import { Description, Error, Loading } from "../../common";
import { BarChartRace } from "./BarChartRace";
import { Box, Typography } from "@mui/material";
import { DataContext } from "../../context/DataContext";
import { BarChartSetting } from "./BarChartSetting";
import { InfoOutlined } from "@mui/icons-material";

export const BarChartRaceMain = () => {
  const { isLoading, error } = useContext(DataContext);
  const descriptionTitle = "このアプリとは？";
  return (
    <Box flex={1}>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Box display="flex" justifyContent="space-around">
          <Box width="440px">
            <Description
              startIcon={<InfoOutlined />}
              title={descriptionTitle}
              sx={{ marginBottom: 2 }}
            >
              <Box>
                <Typography fontSize="12px">
                  ・AtCoderの提出データをもとに言語の使用量をバーチャートレースを用いて可視化したアプリケーションです。
                </Typography>
              </Box>
            </Description>
            <BarChartSetting />
          </Box>
          <BarChartRace />
        </Box>
      )}
    </Box>
  );
};
