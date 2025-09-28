import { useMain } from "./use-main";
import { Box } from "@mui/material";
import { Header } from "./header";

export const Main = () => {
  const { url, setUrl } = useMain();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        gap: 1,
      }}
    >
      <Header setUrl={setUrl} />
      <webview id="webview" src={url} style={{ height: "88vh" }}></webview>
    </Box>
  );
};

export default Main;
