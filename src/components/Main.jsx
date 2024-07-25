import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { BarChartRace } from "./barChartRace/BarChartRace";
import { Error, Header, Loading, Description } from "../common";
import { DataContext } from "../context/DataContext";
import { InfoOutlined } from "@mui/icons-material";

export const Main = () => {
  const { isLoading, error } = useContext(DataContext);
  const descriptionTitle = "このアプリとは？";
  const descriptionText = (
    <Box>
      <Typography>
        AtCoderの提出データをもとに言語の使用量を可視化したアプリケーションです。
      </Typography>
      <Typography>
        このアプリケーションでは、2013年10月以降の全提出データを利用しています。
      </Typography>
      <Typography>
        下側の「設定」から、自分の見たい情報をフィルタリングすると、フィルタリングに基づいたデータが描画されるようになっています。
      </Typography>
    </Box>
  );

  return (
    <>
      <Header />
      <Description
        startIcon={<InfoOutlined />}
        title={descriptionTitle}
        text={descriptionText}
      />
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
