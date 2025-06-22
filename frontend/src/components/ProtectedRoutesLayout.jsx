/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import "../assets/styles/protectedRoutes.css";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";

const ProtectedRoutesLayout = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="protectedRoutes">
      <div className="static">
        <Header />
        <div className="texts">
          <h2>Hi {currentUser?.fullName.split(" ")[0]}</h2>
          <h1>Welcome to Dashboard</h1>
        </div>
      </div>
      <div className="outlet">
        {currentUser ? <Outlet /> : <Navigate to={"/login"} />}
      </div>
    </div>
  );
};

export default ProtectedRoutesLayout;
