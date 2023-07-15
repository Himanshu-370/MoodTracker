import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();
  return (
    <Box>
      <hr />
      <Box sx={theme.display.flexDisplayCol}>
        <Box>
          <Typography
            variant="caption"
            style={{
              color: "#2b3467",
              marginBottom: "1rem",
            }}
            textAlign="center"
          >
            Made with ❤️ by Team{" "}
            <a
              href="https://github.com/Himanshu-370/moodKalendar"
              style={{
                fontWeight: "700",
                color: "black",
                textDecoration: "underline",
              }}
            >
              moodKalendar
            </a>
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="caption"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <a href="https://github.com/Himanshu-370">Himanshu</a> |
            <a href="https://github.com/Gazal026">Gazal</a> |
            <a href="https://github.com/Charuhas10">Charuhas</a> |
            <a href="https://github.com/amaan14999">Amaan</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
