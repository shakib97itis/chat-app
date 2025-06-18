import { BrowserRouter, Routes, Route } from "react-router";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Message from "./pages/message/Message";
import Notification from "./pages/notification/Notification";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
