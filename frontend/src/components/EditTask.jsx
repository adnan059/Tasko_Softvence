import React, { useState } from "react";

import "../assets/styles/editTask.css";
import EditTaskDrawer from "./EditTaskDrawer";
import useTask from "../hooks/useTask";
import { useSelector } from "react-redux";

const EditTask = () => {
  const [open, setOpen] = useState(false);
  const { updateTaskById } = useTask();
  const { selectedTask } = useSelector((state) => state.task);

  const handleEditTask = async (data) => {
    await updateTaskById(selectedTask?._id, data);
  };

  return (
    <div className="editTask">
      <button className="editTaskBtn" onClick={() => setOpen(true)}>
        ✏️ Edit Task
      </button>
      <EditTaskDrawer
        open={open}
        onClose={() => setOpen(false)}
        onSubmitTask={handleEditTask}
      />
    </div>
  );
};

export default EditTask;
