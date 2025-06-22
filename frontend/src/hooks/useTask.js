import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "./../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask, setTaskList } from "../redux/taskSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useTask = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.task);
  const { currentUser } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  // getting all the tasks
  const getAllTasks = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/task/all`, {
        withCredentials: true,
      });
      //console.log(data);

      dispatch(setTaskList(data));

      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message, { autoClose: 1600 });
      setLoading(false);
    }
  };

  // creating a task
  const createTask = async (taskData) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${BASE_URL}/task/create`,
        { creator: currentUser?._id, ...taskData },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      const newTaskList = [data, ...taskList];

      dispatch(setTaskList(newTaskList));

      setLoading(false);
      toast.success("Task Created Successfully", { autoClose: 1600 });
    } catch (error) {
      toast.error(error.response.data.errors[0].msg, { autoClose: 1600 });
      setLoading(false);
    }
  };

  // get task by id
  const getTaskById = async (id) => {
    dispatch(setSelectedTask(null));
    setLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/task/${id}`, {
        withCredentials: true,
      });

      //console.log(data);

      dispatch(setSelectedTask(data));

      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  // update task by id
  const updateTaskById = async (id, updateData) => {
    setLoading(true);
    try {
      const { data } = await axios.put(`${BASE_URL}/task/${id}`, updateData, {
        withCredentials: true,
      });

      dispatch(setSelectedTask(data));

      const newTaskList = taskList.filter((task) => task._id !== id);

      dispatch(setTaskList([...newTaskList, data]));

      setLoading(false);

      toast.success("Task Updated Successfully", { autoClose: 1600 });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setLoading(false);
    }
  };

  // delete task by id
  const deleteTaskById = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.delete(`${BASE_URL}/task/${id}`, {
        withCredentials: true,
      });

      dispatch(setSelectedTask(null));

      const newTaskList = taskList.filter((task) => task._id !== id);

      dispatch(setTaskList(newTaskList));

      toast.success(data?.message);

      setLoading(false);

      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  // get tasks by type
  const getTasksByType = async (type) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/task/type/${type}`, {
        withCredentials: true,
      });

      dispatch(setTaskList(data));

      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  // get tasks by type
  const getTasksByCategory = async (category) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${BASE_URL}/task/category/${category}`,
        {
          withCredentials: true,
        }
      );

      dispatch(setTaskList(data));

      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return {
    getAllTasks,
    createTask,
    getTaskById,
    updateTaskById,
    loading,
    deleteTaskById,
    getTasksByType,
    getTasksByCategory,
  };
};

export default useTask;
