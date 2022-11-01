import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Side from "./Side";
import Videos from "./Videos";
import { FetchApi } from "./FetchApi";
import { SettingsInputSvideo } from "@mui/icons-material";
import Loader from "./Loader";

const Feedback = () => {
  const [selected, setSelected] = useState("New");
  const [video, setVideo] = useState([]);
  if (!selected) return <Loader />;
  useEffect(() => {
    FetchApi(`search?part=snippet&q=${selected}`).then((data) =>
      setVideo(data.items)
    );
  }, [selected]);
  return (
    <Stack sx={{ flexDirection: { lg: "row", md: "row", xs: "column" } }}>
      <Box
        sx={{
          height: { lg: "100vh", md: "95vh", xs: "auto" },
          px: { xs: "5px", lg: "15px" },
        }}
        borderRight="1px solid #fff"
      >
        <Side selected={selected} setSelected={setSelected} />
      </Box>
      <Box padding="20px" height="95vh" overflow="auto" flex="2">
        <Typography fontSize="25px" fontWeight="bold" color="#fff" mb="20px">
          {selected}{" "}
          <span
            style={{ ontWeight: "bold", fontSize: "24px" }}
            className="color"
          >
            Videos
          </span>
        </Typography>
        <Videos video={video} />
      </Box>
    </Stack>
  );
};

export default Feedback;
