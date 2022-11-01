import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Videos from "./Videos";
import { FetchApi } from "./FetchApi";
import Loader from "./Loader";
const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    FetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setDetail(data.items[0])
    );

    FetchApi(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    ).then((data) => setVideo(data.items));
  }, [id]);
  console.log(detail);
  if (!detail) return <Loader />;
  const topHandler = () => {
    window.scrollTo({ top: "500px", behavior: "smooth" });
  };
  return (
    <Box className="det">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} sx={{ width: "100%", marginTop: "70px" }}>
          {" "}
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Typography color="#fff" mt="14px" fontWeight="bold" ml="15px">
            {detail.snippet.title}
          </Typography>
          <Typography color="#fff" mt="14px" ml="15px" fontSize="13px">
            {detail.snippet.publishedAt}
          </Typography>
          <Stack
            justifyContent="space-between"
            mt="15px"
            ml="15px"
            color="#fff"
            direction="row"
          >
            <Link to={`/channel/${detail.snippet.channelId}`}>
              <Typography color="#fff" fontSize="16px" fontWeight="bold">
                {" "}
                {detail.snippet.channelTitle}{" "}
                <CheckCircleIcon
                  sx={{ fontSize: "14px", color: "#fff", ml: "5px" }}
                  mt="3px"
                />
              </Typography>
            </Link>
            <Stack
              direction="row"
              gap="10px"
              alignItems="center"
              justifyContent="center"
              mr="15px"
            >
              {" "}
              <Typography variant="body1" color="#9AA5B1">
                {parseInt(detail.statistics.viewCount).toLocaleString()}{" "}
                <span style={{ color: "#fff" }}>Views</span>
              </Typography>
              <Typography variant="body1" color="#9AA5B1">
                {parseInt(detail.statistics.likeCount).toLocaleString()}{" "}
                <span style={{ color: "#fff" }}>Likes</span>
              </Typography>
              <Typography variant="body1" color="#9AA5B1">
                {parseInt(detail.statistics.commentCount).toLocaleString()}{" "}
                <span style={{ color: "#fff" }}>Comment</span>
              </Typography>
            </Stack>
          </Stack>{" "}
          <Typography mt="15px" ml="15px" fontSize="13px" color="#9AA5B1">
            <span style={{ color: "#fff", fontSize: "16px" }}>
              {" "}
              Description:
            </span>{" "}
            {detail.snippet.description.slice(0, 350)}
          </Typography>
        </Box>{" "}
      </Stack>{" "}
      <Typography fontWeight="bold" className="cha" fontSize="50px" mt="25px">
        Related Videos{" "}
      </Typography>{" "}
      <Box
        justifyContent="center"
        alignItems="center"
        py="20px"
        px="20px"
        mt="20px"
      >
        <Videos video={video} topHandler={topHandler} />
      </Box>
    </Box>
  );
};

export default VideoDetail;
