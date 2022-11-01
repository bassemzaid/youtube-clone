import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import Feedback from "../src/component/Feedback";
import VideoDetail from "../src/component/VideoDetail";
import ChannelDetail from "../src/component/ChannelDetail";
import Search from "../src/component/Search";
import Nav from "./component/Nav";
const App = () => {
  return (
    <Box className="back">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Feedback />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchCase" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
