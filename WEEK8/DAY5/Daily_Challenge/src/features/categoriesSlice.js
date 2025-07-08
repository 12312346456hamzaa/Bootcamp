import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: 1, name: 'Work' },
    { id: 2, name: 'Personal' },
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    editCategory: (state, action) => {
      const { id, name } = action.payload;
      const category = state.categories.find((cat) => cat.id === id);
      if (category) category.name = name;
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter((cat) => cat.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;

export const selectCategories = (state) => state.categories.categories;

export const selectCategoryById = createSelector(
  [selectCategories, (_, id) => id],
  (categories, id) => categories.find((cat) => cat.id === id)
);

export default categoriesSlice.reducer;
