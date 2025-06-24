import { ADD_TASK, EDIT_TASK, DELETE_TASK, SET_DATE } from './actions';

const initialState = {
  selectedDate: new Date().toISOString().slice(0, 10), // format YYYY-MM-DD
  tasks: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return { ...state, selectedDate: action.payload };

    case ADD_TASK: {
      const { date, task } = action.payload;
      const prevTasks = state.tasks[date] || [];
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [date]: [...prevTasks, task],
        },
      };
    }

    case EDIT_TASK: {
      const { date, taskId, updatedText } = action.payload;
      const updatedTasks = state.tasks[date].map((task) =>
        task.id === taskId ? { ...task, text: updatedText } : task
      );
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [date]: updatedTasks,
        },
      };
    }

    case DELETE_TASK: {
      const { date, taskId } = action.payload;
      const filteredTasks = state.tasks[date].filter((task) => task.id !== taskId);
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [date]: filteredTasks,
        },
      };
    }

    default:
      return state;
  }
}
