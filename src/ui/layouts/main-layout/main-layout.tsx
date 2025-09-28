import { Box } from "@mui/material";

export const MainLayout = (props: any) => {
  const { children } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        gap: 1,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
