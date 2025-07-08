import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, title: 'Finish project', completed: false, categoryId: 1 },
    { id: 2, title: 'Buy groceries', completed: true, categoryId: 2 },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.title = title;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    toggleTaskCompleted: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompleted } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;

export const selectTasksByCategory = createSelector(
  [selectTasks, (_, categoryId) => categoryId],
  (tasks, categoryId) => tasks.filter((t) => t.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
  [selectTasks],
  (tasks) => tasks.filter((t) => t.completed).length
);

export default tasksSlice.reducer;
