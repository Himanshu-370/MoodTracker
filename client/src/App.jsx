import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";
import "./App.css";
import Analyse from "./components/Analyse";

import Navbar from "./components/navbar";
import { CssBaseline, Container } from "@mui/material";
import Hero from "./components/Hero";
import Calendar from "./components/Calendar";
import Mood from "./components/Mood";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Navbar />
          <Hero />
          <Calendar />
          <Mood />
          <Analyse />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
