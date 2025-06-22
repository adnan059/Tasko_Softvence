import React, { useState } from "react";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import "../assets/styles/addTask.css";
import CreateTaskDrawer from "./CreateTaskDrawer";
import useTask from "../hooks/useTask";

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const { createTask } = useTask();

  const handleCreateTask = async (data) => {
    await createTask(data);
  };

  return (
    <div className="addTask">
      <button className="addTaskBtn" onClick={() => setOpen(true)}>
        <NoteAddOutlinedIcon sx={{ width: 24, height: 24 }} />
        Add New Task
      </button>
      <CreateTaskDrawer
        open={open}
        onClose={() => setOpen(false)}
        onSubmitTask={handleCreateTask}
      />
    </div>
  );
};

export default AddTask;
