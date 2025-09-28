import { Box } from "@mui/material";
import { Header } from "./header";

export const MainLayout = (props: any) => {
  const { children } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      {children}
    </Box>
  );
};

export default MainLayout;
