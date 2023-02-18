import { createSlice } from '@reduxjs/toolkit';

export const launchesSlice = createSlice({
  name: 'launches',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    loadLaunchesStart: (state) => {
      state.loading = true;
    },
    loadLaunchesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    loadLaunchesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadLaunchesStart, loadLaunchesSuccess, loadLaunchesFailure } = launchesSlice.actions;

export default launchesSlice.reducer;