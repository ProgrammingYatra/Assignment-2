import axios from 'axios';
import { loadLaunchesFailure, loadLaunchesStart, loadLaunchesSuccess } from '../reducers/launchesReducer';

export const loadLaunches = () => async (dispatch) => {
  try {
    dispatch(loadLaunchesStart());

    const response = await axios.get('https://api.spacexdata.com/v3/launches');
console.log(response)
    dispatch(loadLaunchesSuccess(response.data));
  } catch (error) {
    dispatch(loadLaunchesFailure(error.message));
  }
};