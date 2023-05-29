import React from "react";
import Tile from "../Tile";
import { Box } from "@mui/material";

const Stats = () => {
  const tileCount = 365; // Number of tiles in the grid

  return (
    <Box className="grid">
      {Array.from({ length: tileCount }).map((_, index) => (
        <Tile key={index} index={index} />
      ))}
    </Box>
  );
};

export default Stats;
