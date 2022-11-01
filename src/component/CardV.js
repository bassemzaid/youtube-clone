import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "./Const";

const CardV = ({ item, topHandler }) => {
  const { id, snippet } = item;
  return (
    <Card
      sx={{
        width: { xs: "350px", sm: "240px", lg: "290px" },
        boxShadow: "none",
        borderRadius: 0,
        className: "card",
      }}
      onClick={topHandler}
    >
      <Link to={`/video/${id.videoId}`}>
        <CardMedia
          image={snippet.thumbnails.high.url || demoThumbnailUrl}
          sx={{ width: { xs: "100%", sm: "250px", md: "290px" }, height: 160 }}
          alt={snippet.Title}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#E4E7EB", height: "70px" }}>
        <Typography fontWeight="bold" fontSize="16px" color="#333">
          {snippet.title.slice(0, 30) || demoVideoTitle.slice(0, 30)}
        </Typography>
        <Link
          to={
            snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
        <Typography fontSize="13px" color="#333">
          {snippet.publishedAt}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardV;
