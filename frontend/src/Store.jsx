import { configureStore } from '@reduxjs/toolkit';
import launchesReducer from './reducers/launchesReducer';

export default configureStore({
  reducer: {
    launches: launchesReducer,
  },
});