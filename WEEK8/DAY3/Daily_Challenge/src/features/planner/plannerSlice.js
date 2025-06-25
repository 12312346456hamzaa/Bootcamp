// src/features/planner/plannerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {}, // ex: "2025-06-25": [{ id, text }]
  selectedDate: new Date().toISOString().split('T')[0],
};

let taskId = 1;

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    selectDate(state, action) {
      state.selectedDate = action.payload;
    },
    addTask(state, action) {
      const { date, text } = action.payload;
      if (!state.tasksByDate[date]) state.tasksByDate[date] = [];
      state.tasksByDate[date].push({ id: taskId++, text });
    },
    editTask(state, action) {
      const { date, id, newText } = action.payload;
      const task = state.tasksByDate[date]?.find(t => t.id === id);
      if (task) task.text = newText;
    },
    deleteTask(state, action) {
      const { date, id } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date]?.filter(t => t.id !== id);
    },
  },
});

export const { selectDate, addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;
