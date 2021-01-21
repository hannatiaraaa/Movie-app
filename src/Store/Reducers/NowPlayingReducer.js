import {FILL_NOW_PLAYING_MOVIES} from '../Actions/actionNowPlaying';

const initialState = {
  nowPlayingMovies: [],
};

export const NowPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
