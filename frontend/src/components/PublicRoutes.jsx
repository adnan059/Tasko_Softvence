/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);
  return currentUser ? <Navigate to={"/"} /> : <Outlet />;
};

export default PublicRoutes;
