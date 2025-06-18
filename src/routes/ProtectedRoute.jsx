import React from "react";
import { useAuth } from "../context/authContext/useAuth";
import { redirect } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && user && children}
      {!loading && !user && redirect("/login")}
    </>
  );
};

export default ProtectedRoutes;
