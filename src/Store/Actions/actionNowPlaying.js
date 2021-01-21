import axios from 'axios';
import {API_KEY} from '../../Shared/utils/key';

export const FILL_NOW_PLAYING_MOVIES = 'FILL_NOW_PLAYING_MOVIES';

export const actionNowPlaying = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    );

    if (res) {
      dispatch({
        type: 'FILL_NOW_PLAYING_MOVIES',
        payload: res.data.results,
      });
    } else {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};
