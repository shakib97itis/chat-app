import { Navigate, Outlet } from "react-router";
import useAuth from "../context/auth/useAuth";

const ProtectedRoutes = () => {
  const { user, loading } = useAuth();

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && user && <Outlet />}
      {!loading && !user && <Navigate to="/login" replace />}
    </>
  );
};

export default ProtectedRoutes;
