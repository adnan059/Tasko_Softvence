const Task = require("../models/task.model");

// create single task
const createATask = async (taskData) => {
  const task = await Task.create(taskData);
  return task;
};

// get all tasks
const getAllTasks = async (creator) => {
  const tasks = await Task.find({ creator }).sort({ createdAt: -1 });
  return tasks;
};

// get task by id
const getTaskById = async (id, creator) => {
  const task = await Task.findOne({ creator, _id: id });
  return task;
};

// get tasks of specific types
const getTasksOfSpecificType = async (type, creator) => {
  let tasks = [];

  if (type === "all") {
    tasks = await Task.find({ creator }).sort({ createdAt: -1 });
  } else if (type === "collaborative") {
    tasks = await Task.find({ taskType: "collaborative", creator })
      .populate("collaborators", "name email")
      .sort({
        createdAt: -1,
      });
  } else {
    tasks = await Task.find({ status: type, creator }).sort({
      createdAt: -1,
    });
  }

  return tasks;
};

const getTasksOfSpecificCategory = async (category, creator) => {
  const tasks = await Task.find({ category, creator }).sort({ createdAt: -1 });
  return tasks;
};

// update a task
const updateATask = async (id, updateData, creator) => {
  const updatedTask = await Task.findOneAndUpdate(
    { _id: id, creator },
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );
  return updatedTask;
};

const deleteATask = async (id, creator) => {
  await Task.findOneAndDelete({ _id: id, creator });
};

module.exports = {
  createATask,
  getAllTasks,
  getTaskById,
  getTasksOfSpecificType,
  updateATask,
  deleteATask,
  getTasksOfSpecificCategory,
};
