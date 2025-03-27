import React from "react";
import Registration from "./pages/ragistration/Registration";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";

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
