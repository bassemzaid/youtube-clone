import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "./Const";
import Loader from "./Loader";
const ChannelCard = ({ detail, marginTop }) => {
  const { id, snippet } = detail;

  return (
    <Box className="box" sx={{ marginTop }}>
      <Link to={`/channel/${id.channelId}`}>
        <CardContent
          display="flex"
          justifycontent="center"
          flexdirection="column"
          color="#fff"
          textaligne="center"
        >
          <CardMedia
            image={detail.snippet.thumbnails.high.url || demoProfilePicture}
            alt={detail.snippet.Title}
            sx={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              marginBottom: "16px",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <Typography color="#fff" textAlign="center">
            {detail.snippet.title}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
