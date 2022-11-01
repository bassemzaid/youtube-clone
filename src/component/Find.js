import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Find = () => {
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const formHandler = (e) => {
    e.preventDefault();
    if (state) {
      navigate(`/search/${state}`);
      setState("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={formHandler}
      sx={{
        borderRadius: "15px",
        border: "1px solid #006270",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "#006270" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Find;
