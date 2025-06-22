import React from "react";
import {
  Drawer,
  IconButton,
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

const categories = [
  { value: "artsAndCraft", label: "Arts & Craft" },
  { value: "nature", label: "Nature" },
  { value: "family", label: "Family" },
  { value: "sports", label: "Sports" },
  { value: "friends", label: "Friends" },
  { value: "meditation", label: "Meditation" },
];

const CreateTaskDrawer = ({ open, onClose, onSubmitTask }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data) => {
    const endDate = new Date(data?.endDate).toISOString();
    const taskData = { ...data, endDate };
    await onSubmitTask(taskData);
    onClose();
  };

  const labelAndHelperStyle = {
    "& .MuiInputLabel-root": {
      fontSize: "16px",
    },
    "& .MuiFormHelperText-root": {
      fontSize: "14px",
    },
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 400, p: 3, position: "relative" }}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h4" gutterBottom>
          Create New Task
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}
        >
          {/* Title */}
          <TextField
            label="Title"
            {...register("title", {
              required: "Task title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            })}
            error={!!errors.title}
            helperText={errors.title?.message}
            fullWidth
            slotProps={{ input: { style: { fontSize: "1.6rem" } } }}
            sx={labelAndHelperStyle}
          />

          {/* Description */}
          <TextField
            label="Description"
            multiline
            minRows={3}
            {...register("description", {
              maxLength: {
                value: 1000,
                message: "Description can't exceed 1000 characters",
              },
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
            fullWidth
            slotProps={{ input: { style: { fontSize: "16px" } } }}
            sx={labelAndHelperStyle}
          />

          {/* End Date */}
          <TextField
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            {...register("endDate", {
              required: "End date is required",
            })}
            error={!!errors.endDate}
            helperText={errors.endDate?.message}
            fullWidth
            slotProps={{ input: { style: { fontSize: "16px" } } }}
            sx={labelAndHelperStyle}
          />

          {/* Category */}
          <TextField
            label="Category"
            select
            {...register("category", {
              required: "Category is required",
            })}
            error={!!errors.category}
            helperText={errors.category?.message}
            fullWidth
            slotProps={{ input: { style: { fontSize: "16px" } } }}
            sx={labelAndHelperStyle}
          >
            {categories.map((option) => (
              <MenuItem
                sx={{ fontSize: "14px" }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {/* Status */}
          <TextField
            label="Status"
            select
            defaultValue="pending"
            {...register("status")}
            fullWidth
            slotProps={{ input: { style: { fontSize: "16px" } } }}
            sx={labelAndHelperStyle}
          >
            <MenuItem sx={{ fontSize: "14px" }} value="pending">
              Pending
            </MenuItem>
            <MenuItem sx={{ fontSize: "14px" }} value="ongoing">
              Ongoing
            </MenuItem>
            <MenuItem sx={{ fontSize: "14px" }} value="done">
              Done
            </MenuItem>
          </TextField>

          {/* Task Type */}
          <TextField
            label="Task Type"
            select
            defaultValue="solo"
            {...register("taskType")}
            fullWidth
            slotProps={{ input: { style: { fontSize: "16px" } } }}
            sx={labelAndHelperStyle}
          >
            <MenuItem sx={{ fontSize: "14px" }} value="solo">
              Solo
            </MenuItem>
            <MenuItem sx={{ fontSize: "14px" }} value="collaborative">
              Collaborative
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            type="submit"
            sx={{
              mt: 2,
              fontSize: "16px",
              fontWeight: "bold",
              paddingY: "10px",
              background: "#60e5ae",
              color: "black",
            }}
          >
            Create Task
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CreateTaskDrawer;
