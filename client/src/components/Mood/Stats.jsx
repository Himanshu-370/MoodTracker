import React from "react";
import Tile from "../Tile";
import { Box } from "@mui/material";

const Stats = () => {
  const currentDate = new Date();
  const currentDayOfYear = Math.floor(
    (currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000
  );
  const tileCount = currentDayOfYear; // Number of tiles in the grid limited to the current date

  return (
    <Box className="grid">
      {Array.from({ length: tileCount }).map((_, index) => (
        <Tile key={index} index={index} />
      ))}
    </Box>
  );
};

export default Stats;
