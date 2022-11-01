import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { FetchApi } from "./FetchApi";
import Side from "./Side";
const Search = () => {
  const [video, setVideo] = useState([]);
  const { searchCase } = useParams();
  useEffect(() => {
    FetchApi(`search?part=snippet&q=${searchCase}`).then((data) =>
      setVideo(data.items)
    );
  }, [searchCase]);
  return (
    <Stack sx={{ flexDirection: { lg: "row", md: "row", xs: "column" } }}>
      <Box
        sx={{
          height: { lg: "100vh", md: "95vh", xs: "auto" },
          px: { xs: "5px", lg: "15px" },
        }}
        borderRight="1px solid #fff"
      >
        <Side />
      </Box>
      <Box padding="20px" height="95vh" overflow="auto" flex="2">
        <Typography fontSize="25px" fontWeight="bold" color="#fff" mb="20px">
          Search Results For : {""}
          <span style={{ color: "#fff", fontWeight: "bold", fontSize: "24px" }}>
            {searchCase}
          </span>
        </Typography>
        <Videos video={video} />
      </Box>
    </Stack>
  );
};

export default Search;
