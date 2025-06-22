import React from "react";
import "../assets/styles/homePage.css";
import HomeTopbar from "./../components/HomeTopbar";
import TaskList from "./../components/TaskList";

const HomePage = () => {
  return (
    <div className="home">
      <HomeTopbar />
      <TaskList />
    </div>
  );
};

export default HomePage;
