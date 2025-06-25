// src/components/Calendar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from '../features/planner/plannerSlice';

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  const handleChange = (e) => {
    dispatch(selectDate(e.target.value));
  };

  return (
    <div>
      <input type="date" value={selectedDate} onChange={handleChange} />
    </div>
  );
};

export default Calendar;
