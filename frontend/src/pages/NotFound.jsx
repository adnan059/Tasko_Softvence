import React from "react";
import notFound from "../assets/images/notFound.png";
import { Link } from "react-router-dom";
import "../assets/styles/notFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="bg"></div>
      <div className="content">
        <div className="image">
          <img src={notFound} alt="" />
        </div>
        <Link to={"/"}>
          <button>Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
