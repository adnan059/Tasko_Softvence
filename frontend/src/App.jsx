import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { ToastContainer } from "react-toastify";
import ProtectedRoutesLayout from "./components/ProtectedRoutesLayout";
import HomePage from "./pages/HomePage";
import SingleTaskPage from "./pages/SingleTaskPage";
import PublicRoutes from "./components/PublicRoutes";
import NotFound from "./pages/NotFound";
import PickTask from "./pages/PickTask";

const App = () => {
  return (
    <div className="websiteContainer">
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-up" element={<SignupPage />} />
          </Route>

          <Route element={<ProtectedRoutesLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="task/:id" element={<SingleTaskPage />} />
            <Route path="/pick-task" element={<PickTask />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
