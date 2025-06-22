/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "../assets/styles/taskList.css";
import TaskCard from "./TaskCard";
import useTask from "../hooks/useTask";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyTaskList from "./EmptyTaskList";

const TaskList = () => {
  const { getAllTasks, loading } = useTask();
  const { taskList } = useSelector((state) => state.task);

  useEffect(() => {
    getAllTasks();
  }, []);
  if (loading) return <h2>Loading...</h2>;
  // console.log(taskList);

  return (
    <div className="taskList">
      {taskList.length < 1 && <EmptyTaskList />}
      {taskList?.map((task) => (
        <Link
          to={`/task/${task?._id}`}
          key={task?._id}
          state={{ initialStatus: task?.status }}
        >
          <TaskCard task={task} />
        </Link>
      ))}
    </div>
  );
};

export default TaskList;
