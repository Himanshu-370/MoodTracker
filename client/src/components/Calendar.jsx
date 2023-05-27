import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Calendar() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box sx={theme.display.centerScreen}>
        <Typography
          variant="h3"
          textAlign="center"
          style={{ color: "#eb455f", fontSize: "1.5rem", marginBottom: "1rem" }}
        >
          FEATURES
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          style={{ color: "#2b3467", fontSize: "3rem", marginBottom: "1rem" }}
        >
          Flow provides an array of features to explore and enjoy
        </Typography>

        <Box
          sx={{
            width: "80%",
            height: "400px",
            backgroundColor: "#ccc",
            marginBottom: "1.5rem",
          }}
        ></Box>
        <br />

        <Typography
          variant="h3"
          textAlign="center"
          style={{
            color: "#eb455f",
            fontSize: "1.5rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Add Your Mood To The Calendar
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          style={{ color: "#70bfef", fontSize: "1.5rem", marginBottom: "1rem" }}
        >
          With just a few clicks, adding your mood to the calendar becomes
          incredibly effortless
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default Calendar;
