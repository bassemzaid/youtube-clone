import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/social-media-marketing-youtube-digital-marketing-business-video-youtube-icon-215010b5a85f9e23b393584b8078648e.png";
import { Stack } from "@mui/system";
import Find from "./Find";
const Nav = () => {
  return (
    <Stack
      p="12px"
      display="flex"
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      top="0"
    >
      <Link to="/">
        <img src={logo} style={{ height: "45px", width: "45px" }} alt="logo" />
      </Link>
      <Find />
    </Stack>
  );
};

export default Nav;
