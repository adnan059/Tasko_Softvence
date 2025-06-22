import React from "react";
import "../assets/styles/taskCard.css";
import taskIcon from "../assets/images/task-icon.png";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import { formatDate } from "./../utils/helper";

const TaskCard = ({ task }) => {
  return (
    <div className="taskCard">
      <div className="title-desc">
        <div className="taskIcon">
          <img src={taskIcon} alt="" />
        </div>
        <div className="texts">
          <h2>{task?.title}</h2>
          <p>{task?.description}</p>
        </div>
      </div>
      <div className="date-status">
        <div className="date">
          <EditCalendarOutlinedIcon />
          <span>{formatDate(task?.endDate)}</span>
        </div>
        <div className={`status ${task?.status}`}>
          <CircleIcon className="dot" />
          <span>
            {task?.status === "ongoing" ? "In Progress" : task?.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
