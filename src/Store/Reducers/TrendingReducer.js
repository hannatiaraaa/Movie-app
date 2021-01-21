import {FILL_TRENDING_MOVIES} from '../Actions/actionTrending';

const initialState = {
  trendingMovies: [],
};

export const TrendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovies: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
