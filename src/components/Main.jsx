import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Header, Description, Footer } from "../common";
import { InfoOutlined } from "@mui/icons-material";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";
import { DARK_BG_COLOR, LIGHT_BG_COLOR } from "../style/style";
import { BarChartRaceMain } from "./barChartRace";

export const Main = () => {
  const { isDark } = useContext(DarkModeContext);
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const descriptionTitle = "このアプリとは？";
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        bgcolor={isDark ? DARK_BG_COLOR : LIGHT_BG_COLOR}
      >
        <Header />
        <Description startIcon={<InfoOutlined />} title={descriptionTitle}>
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
        </Description>
        <BarChartRaceMain />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
