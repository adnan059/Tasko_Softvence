/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import "../assets/styles/singleTask.css";
import {
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  ListItemText,
  Box,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import taskIcon from "../assets/images/task-icon.png";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import useTask from "../hooks/useTask";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "./../utils/helper";
import TaskCompleteModal from "../components/TaskCompleteModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import { setSelectedTask } from "../redux/taskSlice";

const statusArray = [
  {
    value: "all",
    label: "All Task",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "ongoing",
    label: "Ongoing",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "collaborative",
    label: "Collabotative Task",
  },
];

const SingleTaskPage = () => {
  const { state } = useLocation();
  const { selectedTask } = useSelector((state) => state.task);
  const [status, setStatus] = useState(state.initialStatus);
  const { id } = useParams();
  const { getTaskById, loading, updateTaskById, deleteTaskById } = useTask();
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setModalOpen(false);
    getTaskById(id);
  }, [id]);

  useEffect(() => {
    return () => dispatch(setSelectedTask(null));
  }, []);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async () => {
    await updateTaskById(id, { status });
  };

  const handleDeleteClick = (taskId) => {
    setTaskToDelete(taskId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    await deleteTaskById(taskToDelete);
    setDeleteModalOpen(false);
  };

  useEffect(() => {
    if (selectedTask?.status === "done") {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [selectedTask?.status]);

  return (
    <div className="singleTask">
      <div className="task-header">
        <h2>Task Details</h2>
        <div className="task-actions">
          <span className="points">20 Points</span>
          <button className="edit-btn">✏️ Edit Task</button>
          <button onClick={() => navigate("/")} className="back-btn">
            Back
          </button>
        </div>
      </div>

      {loading ? (
        <h1 style={{ marginBlock: "2rem" }}>Loading...</h1>
      ) : (
        <div className="task-content">
          <div className="task-icon">
            <img src={taskIcon} alt="" />
          </div>
          <div className="task-info">
            <h3>{selectedTask?.title}</h3>
            <p>{selectedTask?.description}</p>

            <div className="task-meta">
              <div className="task-date">
                <p>End Date</p>
                <div>
                  <EditCalendarOutlinedIcon />
                  <span>{formatDate(selectedTask?.endDate)}</span>
                </div>
              </div>
              <div className="task-status">
                <CircleIcon sx={{ fill: "#dd9221", marginRight: "5px" }} />
                <span className="status-label">{selectedTask?.status}</span>
              </div>
            </div>

            <div className="task-dropdown">
              <label>Change Status</label>
              <FormControl fullWidth sx={{ marginTop: "1rem" }}>
                <Select
                  value={status}
                  onChange={handleChange}
                  displayEmpty
                  slotProps={{ input: { style: { fontSize: "16px" } } }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        "& .MuiMenuItem-root": {
                          fontSize: "14px",
                          "&:hover": {
                            backgroundColor: "#f0f0f0",
                          },
                        },
                      },
                    },
                  }}
                >
                  {statusArray.map((item) => (
                    <MenuItem
                      key={item.value}
                      value={item.value}
                      sx={{
                        "&.Mui-selected": {
                          backgroundColor: "#e6f7f1",
                          "&:hover": {
                            backgroundColor: "#d0f0e6",
                          },
                        },
                      }}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <Checkbox
                          checked={status === item.value}
                          sx={{
                            color: "#4caf50",
                            "&.Mui-checked": {
                              color: "#00b86b",
                            },
                          }}
                        />
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: "14px",
                          }}
                        />
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      )}

      <div className="task-actions-bottom">
        <button
          disabled={loading}
          onClick={() => handleDeleteClick(id)}
          className="delete-btn"
        >
          Delete Task
        </button>
        <ConfirmDeleteModal
          open={deleteModalOpen}
          handleClose={() => setDeleteModalOpen(false)}
          handleConfirm={confirmDelete}
        />
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="submit-btn"
        >
          Submit
        </button>
        <TaskCompleteModal
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default SingleTaskPage;
