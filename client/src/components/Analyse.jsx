import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import analyseimg from "../assets/4654.jpg";
function Analyse() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box sx={theme.display.centerScreen}>
        <Box>
          <Typography
            variant="h3"
            style={{
              color: "#2b3467",
              fontSize: "3rem",
              marginBottom: "1rem",
            }}
            textAlign="center"
          >
            Analyse your mood.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={analyseimg}
              alt="analyse"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                marginBottom: "1.5rem",
                borderRadius: "20px",
              }}
            />
          </Box>
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
              Graphical mood analysis
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              style={{
                color: "#65bbf0",
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
              }}
              textAlign="center"
            >
              Observe and analyse your mood through visually stunning graphs.
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Analyse;
