import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Message from "../pages/message/Message";
import Notification from "../pages/notification/Notification";
import Settings from "../pages/settings/Settings";
import ProtectedRoute from "../routes/ProtectedRoute";
import GuestRoute from "../routes/GuestRoute";

const AppRouter = () => (
  <Router>
    <Routes>
      {/* Guest routes: only accessible if NOT logged in */}
      <Route element={<GuestRoute />}>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Protected routes: only accessible if logged in */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
