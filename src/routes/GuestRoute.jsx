import { Navigate, Outlet } from "react-router";
import useAuth from "../context/auth/useAuth";

export default function GuestRoute() {
  const { user, loading } = useAuth();
  console.log("GuestRoute", user, loading);
  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !user && <Outlet />}
      {!loading && user && <Navigate to="/" replace />}
    </>
  );
}
