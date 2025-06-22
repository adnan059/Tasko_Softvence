const express = require("express");

const { verifyToken } = require("../utils/auth/token");
const taskValidationRules = require("../utils/validators/task.validator");
const {
  createTask,
  getTasks,
  getSingleTask,
  getTasksByType,
  updateTaskById,
  deleteTask,
  getTasksByCategory,
} = require("../controllers/task.controller");

const router = express.Router();

// create task
router.post("/create", verifyToken, taskValidationRules, createTask);

// get all tasks
router.get("/all", verifyToken, getTasks);

// update a task by id
router.put("/:id", verifyToken, updateTaskById);

// get task by type
router.get("/type/:type", verifyToken, getTasksByType);

// get task by category
router.get("/category/:category", verifyToken, getTasksByCategory);

// get task by id
router.get("/:id", verifyToken, getSingleTask);

// delete a task by id
router.delete("/:id", verifyToken, deleteTask);

module.exports = router;
