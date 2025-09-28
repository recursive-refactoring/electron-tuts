import { Box, Button } from "@mui/material";

export const SubHeader = (props: any) => {
  const { tabs } = props;

  if (!tabs.length) return null;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {tabs?.map((tab: any) => (
        <Button variant="contained">{tab?.title}</Button>
      ))}
    </Box>
  );
};

export default SubHeader;
