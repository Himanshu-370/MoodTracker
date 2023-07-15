import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import theme from "./assets/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Mood/Welcome";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Navbar />

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/mood" element={<Welcome />} />
            </Routes>

            <Footer />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
