import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  loginAction,
  logoutAction,
  setCurrentUser,
  signupAction,
} from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // sign up
  const signup = async (signupData) => {
    setLoading(true);
    try {
      const { email, fullName, password } = signupData;

      const { data } = await axios.post(
        `${BASE_URL}/user/register`,
        {
          email,
          password,
          fullName,
        },
        { withCredentials: true }
      );

      console.log(data);

      dispatch(signupAction(data));

      setLoading(false);
      navigate("/");
    } catch (error) {
      //console.log(error.response.data.errors[0].msg);
      toast.error(error.response.data.errors[0].msg, { autoClose: 1600 });
      setLoading(false);
    }
  };

  // login
  const login = async (loginData) => {
    setLoading(true);
    try {
      const { email, password } = loginData;

      const { data } = await axios.post(
        `${BASE_URL}/user/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log(data);

      dispatch(loginAction(data));

      setLoading(false);
      navigate("/");
    } catch (error) {
      //console.log(error);
      toast.error(error.response.data.message, { autoClose: 1600 });
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post(
        `${BASE_URL}/user/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(logoutAction());

      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  // checing auth route protection
  const checkAuth = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/user/check-auth`, {
        withCredentials: true,
      });

      dispatch(setCurrentUser(data));
      setLoading(false);
    } catch (error) {
      dispatch(setCurrentUser(null));
      // toast.error(error.response.data.message);
      console.log(error);
      setLoading(false);
    }
  };

  return { signup, login, logout, loading, checkAuth };
};

export default useAuth;
