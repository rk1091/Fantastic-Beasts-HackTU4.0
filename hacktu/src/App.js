import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Navbar from "./Components/Navbar.jsx";
import Login from "./Components/Login.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register.jsx";

import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
