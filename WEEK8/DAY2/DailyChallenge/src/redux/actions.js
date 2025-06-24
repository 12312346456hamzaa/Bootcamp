export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_DATE = 'SET_DATE';

export const addTask = (date, task) => ({
  type: ADD_TASK,
  payload: { date, task },
});

export const editTask = (date, taskId, updatedText) => ({
  type: EDIT_TASK,
  payload: { date, taskId, updatedText },
});

export const deleteTask = (date, taskId) => ({
  type: DELETE_TASK,
  payload: { date, taskId },
});

export const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
});
