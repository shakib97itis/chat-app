import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Registration from "./pages/ragistration/Registration";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
