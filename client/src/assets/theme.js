import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    success: {
      main: "#4caf50",
    },
    background: {
      default: "#fcffe7",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "DM Sans",
    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
      fontFamily: "DM Sans",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
      fontFamily: "DM Sans",
    },
    h5: {
      fontWeight: 500,
      fontFamily: "DM Sans",
    },
    h6: {
      fontWeight: 500,
      fontFamily: "DM Sans",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "DM Sans",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ccc",
            },
            "&:hover fieldset": {
              borderColor: "#ccc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ccc",
            },
          },
          fontFamily: "DM Sans",
        },
      },
    },
  },

  display: {
    flexDisplayRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
    },

    flexDisplayCol: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    //center the div  in the middle of the screen
    centerScreen: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    },
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
    marginTop: "1rem",
  },

  button: {
    navBtn: {
      color: "#2b3467",
      fontWeight: 700,
      fontSize: "1.5rem",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    logBtn: {
      color: "#eb455f",
      fontWeight: 700,
      fontSize: "1.5rem",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    featuresBtn: {
      backgroundColor: "#2b3467",
      color: "#fcffe7",
      boxShadow: "none",
      borderRadius: "0.5rem",

      "&:hover": {
        backgroundColor: "#20295c",
        boxShadow: "none",
      },
    },
    signupBtn: {
      border: "3px solid #2b3467",
      backgroundColor: "#fcffe7",
      color: "#2b3467",
      boxShadow: "none",
      borderRadius: "0.5rem",

      "&:hover": {
        backgroundColor: "#ecefd7",
        boxShadow: "none",
        border: "3px solid #2b3467",
      },
    },
  },

  // center: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%,-50%)",
  //   textAlign: "center",
  // },
});

export default theme;
