import React from "react";
import noTask from "../assets/images/no-task.png";

const EmptyTaskList = () => {
  return (
    <div className="emptyTaskList">
      <div className="image">
        <img src={noTask} alt="" />
      </div>
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        No Task is Available yet, Please Add your New Task
      </h2>
    </div>
  );
};

export default EmptyTaskList;
