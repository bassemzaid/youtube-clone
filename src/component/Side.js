import React from "react";
import { Stack } from "@mui/material";
import { categories } from "./Const";

const Side = ({ selected, setSelected }) => {
  return (
    <Stack
      sx={{
        flexDirection: { lg: "column", md: "column", xs: "row" },
        height: { xs: "auto", lg: "100%" },
      }}
      overflow="auto"
    >
      {categories.map((item) => (
        <button
          className="category-btn"
          style={{
            background: item.name === selected && "#7B8794",
          }}
          key={item.name}
          onClick={() => setSelected(item.name)}
        >
          <span style={{ color: item.name === selected ? "#fff" : "#00E0C7" }}>
            {item.icon}
          </span>
          <span style={{ opacity: item.name === selected ? "1" : ".7" }}>
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Side;
