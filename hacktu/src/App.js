import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Navbar from "./Components/Navbar.jsx";
import Login from "./Components/Login.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register.jsx";
import Treatment from "./Components/Treatment";
// import Hospital from "./Components/Hospital.jsx";
import Faq_section from "./Components/Faq_section";
import Footer from "./Components/Footer";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SimpleSlider from "./Components/Hospital.jsx";
import Dental from "./Components/Dental.jsx";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dental" element={<Dental />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
