import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupAction: (state, action) => {
      state.currentUser = action.payload;
    },
    loginAction: (state, action) => {
      state.currentUser = action.payload;
    },

    logoutAction: (state) => {
      state.currentUser = null;
    },

    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { signupAction, loginAction, logoutAction, setCurrentUser } =
  authSlice.actions;

export default authSlice.reducer;
