import React from "react";
import Registration from "./pages/ragistration/Registration";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router";
import firebaseApp from "./utils/firebase.config.js";
import { getAuth } from "firebase/auth";
const auth = getAuth(firebaseApp);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
