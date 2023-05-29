import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import calendar from "../assets/2808566.jpg";

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
          style={{ color: "#2b3467", fontSize: "3rem", marginBottom: "3rem" }}
        >
          MoodKalendar provides an array of features <br />
          to explore and enjoy
        </Typography>

        <img
          src={calendar}
          alt="Add to your calendar"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            marginBottom: "1.5rem",
            borderRadius: "20px",
          }}
        />
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
          style={{ color: "#70bfef", fontSize: "1.5rem", marginBottom: "6rem" }}
        >
          With just a few clicks, adding your mood to the calendar becomes
          incredibly effortless
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default Calendar;
