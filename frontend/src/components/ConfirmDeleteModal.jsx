import React from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import confirmDelete from "../assets/images/confirmDelete.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "400px",

  width: "100%",
  bgcolor: "#fff",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  outline: "none",
  marginInline: "1rem",
};

const ConfirmDeleteModal = ({ open, handleClose, handleConfirm }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {/* Close Icon */}
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <img
          src={confirmDelete}
          alt=""
          style={{
            display: "block",
            marginInline: "auto",
          }}
        />

        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "var(--poppins)",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "132%",
            letterSpacing: "-2%",
          }}
        >
          Are you Sure!!
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "var(--poppins)",
            fontWeight: "400",
            fontSize: "18px",
            color: "#737791",
            marginBlock: "10px",
          }}
        >
          Do you want to delete this Task on this app?
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="error"
            onClick={handleConfirm}
            sx={{
              padding: "10px 30px",
              fontSize: "1.6rem",
              fontWeight: "500",
              backgroundColor: "#60E5AE",
              color: "black",
            }}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              padding: "10px 30px",
              fontSize: "1.6rem",
              fontWeight: "500",
              backgroundColor: "#FF4C2426",
              color: "#FF4C24",
            }}
          >
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmDeleteModal;
