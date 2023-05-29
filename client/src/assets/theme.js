import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
    fontFamily: "Roboto,sans-serif",
    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
      fontFamily: "Roboto,sans-serif",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
      fontFamily: "Roboto,sans-serif",
    },
    h5: {
      fontWeight: 500,
      fontFamily: "Roboto,sans-serif",
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Roboto,sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "Roboto,sans-serif",
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
          fontFamily: "Roboto,sans-serif",
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

  moodPage: {
    welcome: {
      background: "#fff",
      border: "none",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      marginTop: "3rem",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
    moodBtnBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
    },
    moodBtn: {
      border: "none",
      borderColor: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: "1rem",
    },
  },
});

export default theme;
