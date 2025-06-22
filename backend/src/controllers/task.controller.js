const { validationResult } = require("express-validator");

const {
  createATask,
  getAllTasks,
  getTaskById,
  getTasksOfSpecificType,
  updateATask,
  deleteATask,
  getTasksOfSpecificCategory,
} = require("../services/task.service");

// ------- create a task --------
const createTask = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const task = await createATask(req.body);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// ------- get all the tasks -------
const getTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTasks(req.user.id);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// --------- get single task ------------
const getSingleTask = async (req, res, next) => {
  try {
    const task = await getTaskById(req.params.id, req.user.id);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// get task by type
const getTasksByType = async (req, res, next) => {
  try {
    const { type } = req.params;

    const tasks = await getTasksOfSpecificType(type, req.user.id);

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// get task by category
const getTasksByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const tasks = await getTasksOfSpecificCategory(category, req.user.id);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// update a task

const updateTaskById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const updatedTask = await updateATask(req.params.id, req.body, req.user.id);

    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

// delete a task
const deleteTask = async (req, res, next) => {
  await deleteATask(req.params.id, req.user.id);
  res.status(200).json({ message: "Task deleted successfully" });
};

module.exports = {
  createTask,
  getTasks,
  getSingleTask,
  getTasksByType,
  updateTaskById,
  deleteTask,
  getTasksByCategory,
};
