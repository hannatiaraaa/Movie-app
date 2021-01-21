import axios from 'axios';
import {API_KEY} from '../../Shared/utils/key';

export const FILL_MOVIE_DETAILS = 'FILL_MOVIE_DETAILS';

export const actionDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );

    if (res) {
      dispatch({
        type: 'FILL_MOVIE_DETAILS',
        payload: res.data,
      });
    } else {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};
