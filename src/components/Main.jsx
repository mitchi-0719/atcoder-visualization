import { Box, Typography } from "@mui/material";
import { Header, Description } from "../common";
import { InfoOutlined } from "@mui/icons-material";
import { BarChartRaceMain } from "./barChartRace/BarChartRaceMain";
import { Footer } from "../common/Footer";

export const Main = () => {
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
