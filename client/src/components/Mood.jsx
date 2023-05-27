import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "./Btn";

function Mood() {
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
            Mood History.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "400px",
            backgroundColor: "#ccc",
            marginBottom: "1.5rem",
          }}
        ></Box>
        <Box>
          <Typography
            variant="h5"
            textAlign={"center"}
            style={{
              color: "#eb455f",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Track and visualise your mood <br />
            history with ease
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            textAlign={"center"}
            style={{
              color: "#65bbf0",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            Experience your mood history showcased in a format akin <br />
            to GitHub contributions or a monthly calendar view.
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Mood;
