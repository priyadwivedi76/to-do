import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), ...action.payload });
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        existingTask.title = updatedTask.title;
        existingTask.description = updatedTask.description;
        existingTask.priority = updatedTask.priority; // Update priority
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;


