import React from "react";

import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/styles/taskCompleteModal.css";

import taskDone from "../assets/images/taskDone.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "450px",
  width: "100%",
  bgcolor: "#fff",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  outline: "none",
};

const TaskCompleteModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <div className="taskDoneImage">
          <img src={taskDone} alt="" />
        </div>
      </Box>
    </Modal>
  );
};

export default TaskCompleteModal;
