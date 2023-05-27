import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "./Btn";
import Navbar from "./navbar";

function Hero() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box sx={theme.display.centerScreen}>
        <Box>
          <Typography
            variant="h3"
            textAlign="center"
            style={{ color: "#2b3467", fontSize: "3rem", marginBottom: "1rem" }}
          >
            Day by Day, your <span style={{ color: "#eb455f" }}>mood</span>{" "}
            undergoes <br /> transformations.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            style={{
              color: "#65bbf0",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            But what if you could see it!
          </Typography>
        </Box>
        <Box>
          <Button />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Hero;
