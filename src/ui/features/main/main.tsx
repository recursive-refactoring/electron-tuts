import { useMain } from "./use-main";
import { Box } from "@mui/material";
import { Header } from "./header";
import { SubHeader } from "./sub-header";

export const Main = () => {
  const { webViewRef, tabs, setTabs } = useMain();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        gap: 1,
      }}
    >
      <Header webViewRef={webViewRef} tabs={tabs} setTabs={setTabs} />
      <SubHeader tabs={tabs} setTabs={setTabs} />
      <webview
        ref={webViewRef}
        id="webview"
        style={{ height: "88vh" }}
      ></webview>
    </Box>
  );
};

export default Main;
