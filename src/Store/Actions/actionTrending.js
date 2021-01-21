import axios from 'axios';
import {API_KEY} from '../../Shared/utils/key';

export const FILL_TRENDING_MOVIES = 'FILL_TRENDING_MOVIES';

export const actionTrending = (data) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    );

    if (res) {
      dispatch({
        type: 'FILL_TRENDING_MOVIES',
        payload: res.data.results,
      });
    } else {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};
