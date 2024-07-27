import { Box, Typography } from "@mui/material";
import { Header, Description, Footer } from "../common";
import { InfoOutlined } from "@mui/icons-material";
import { BarChartRaceMain } from "./barChartRace/BarChartRaceMain";

export const Main = () => {
  const descriptionTitle = "このアプリとは？";
  const descriptionText = (
    <Box>
      <Typography>
        AtCoderの提出データをもとに言語の使用量をバーチャートレースを用いて可視化したアプリケーションです。
      </Typography>
      <Typography>
        このアプリケーションでは、2013年10月以降の全提出データを利用しています。（現在は、一部のデータのみ）
      </Typography>
      <Typography>
        下側の「設定」から、自分の見たい情報をフィルタリングすると、フィルタリングに基づいたデータが描画されるようになっています。
      </Typography>
    </Box>
  );

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Description
        startIcon={<InfoOutlined />}
        title={descriptionTitle}
        text={descriptionText}
      />
      <BarChartRaceMain />
      <Footer />
    </Box>
  );
};
