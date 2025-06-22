import React from "react";
import "../assets/styles/homeTopbar.css";
import AddTask from "./AddTask";
import CategorySelect from "./CategorySelect";
import TypeSelect from "./TypeSelect";

const HomeTopbar = () => {
  return (
    <div className="homeTopbar">
      <div>
        <h2 className="title">All Tasks</h2>
      </div>

      <div className="actions">
        <CategorySelect />
        <TypeSelect />
        <AddTask />
      </div>
    </div>
  );
};

export default HomeTopbar;
