import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ReplayIcon from "@mui/icons-material/Replay";
import LaunchIcon from "@mui/icons-material/Launch";
// import AddBoxIcon from "@mui/icons-material/AddBox";
import { SearchField } from "@/components";
import { useHeader } from "./use-header";

export const Header = (props: any) => {
  const {
    searchUrl,
    handleNewWindow,
    handleGoBack,
    handleGoForward,
    handleGoReload,
    // handleNewTab,
  } = useHeader(props);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        alignItems: "center",
        padding: 1,
        boxShadow: 1,
        backgroundColor: "",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        <IconButton onClick={handleGoBack}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleGoForward}>
          <ArrowForwardIcon />
        </IconButton>
        <IconButton onClick={handleGoReload}>
          <ReplayIcon />
        </IconButton>
        <IconButton onClick={handleNewWindow}>
          <LaunchIcon />
        </IconButton>
        {/* <IconButton onClick={handleNewTab}>
          <AddBoxIcon />
        </IconButton> */}
      </Box>
      <Box>
        <SearchField handleSearch={searchUrl} />
      </Box>
    </Box>
  );
};

export default Header;
