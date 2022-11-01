import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { FetchApi } from "./FetchApi";
import Loader from "./Loader";
const ChannelDetail = () => {
  const [show, setShow] = useState(null);

  const [video, setVideo] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    FetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setShow(data.items[0])
    );

    FetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideo(data.items)
    );
  }, [id]);
  if (!show) return <Loader />;
  return (
    <Box className="det">
      <Box>
        <div className="grad"></div>
        <ChannelCard detail={show} marginTop="-120px" />
        <Typography className="cha" fontWeight="900" mt="0px" fontSize="55px">
          Channel Videos
        </Typography>
        <Box padding="25px" display="flex" mt="55px" ml="15px">
          {" "}
          <Videos video={video} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
