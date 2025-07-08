import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categoriesSlice';

const CategorySelector = ({ selectedId, setSelectedId }) => {
  const categories = useSelector(selectCategories);

  return (
    <select value={selectedId} onChange={(e) => setSelectedId(Number(e.target.value))}>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
