import React from "react";
import { Stack, Box } from "@mui/material";
import CardV from "./CardV";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Videos = ({ video, topHandler }) => {
  if (!video) return <Loader />;
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap="20px"
      justifyContent="flex-start"
      alignItems="center"
    >
      {video.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <CardV item={item} topHandler={topHandler} />}
          {item.id.channelId && <ChannelCard detail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
