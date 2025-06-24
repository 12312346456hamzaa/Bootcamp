import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../redux/actions';

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.selectedDate);

  const handleChange = (e) => {
    dispatch(setDate(e.target.value));
  };

  return (
    <div>
      <label>Sélectionner une date :</label>
      <input type="date" value={selectedDate} onChange={handleChange} />
    </div>
  );
};

export default Calendar;
