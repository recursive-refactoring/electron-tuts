import { useMain } from "./use-main";
import { Box } from "@mui/material";
import { Header } from "./header";

export const Main = () => {
  const { webViewRef } = useMain();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        gap: 1,
      }}
    >
      <Header webViewRef={webViewRef} />
      <webview
        ref={webViewRef}
        id="webview"
        style={{ height: "88vh" }}
      ></webview>
    </Box>
  );
};

export default Main;
