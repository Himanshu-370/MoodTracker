import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

function Navbar() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box sx={theme.navbar}>
        <Box>
          <Box sx={theme.button.navBtn}>F.</Box>
        </Box>

        <Box sx={theme.display.flexDisplayRow}>
          <Button variant="text" sx={theme.button.navBtn} disableRipple>
            Home
          </Button>
          <Button variant="text" sx={theme.button.navBtn} disableRipple>
            Features
          </Button>
          <Button variant="text" sx={theme.button.logBtn} disableRipple>
            Login
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Navbar;
