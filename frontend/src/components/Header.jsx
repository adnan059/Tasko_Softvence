import React from "react";
import "../assets/styles/header.css";
import clock from "../assets/images/clock.png";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={clock} alt="" />
        <a href={"/"}>Tasko</a>
      </div>

      <nav>
        <ul>
          <li>
            <Link to={"/"}>
              <AssignmentIcon sx={{ width: 23, height: 23 }} />
              <span>Task List</span>
            </Link>
          </li>
          <li>
            <Link to={"/pick-task"}>
              <SportsSoccerIcon sx={{ width: 23, height: 23 }} />
              <span>Spin</span>
            </Link>
          </li>
        </ul>
      </nav>

      <HeaderMenu />
    </header>
  );
};

export default Header;
