import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  selectedTask: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskList: (state, action) => {
      state.taskList = action.payload;
    },

    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

export const { setTaskList, setSelectedTask } = taskSlice.actions;

export default taskSlice.reducer;
