import {FILL_MOVIE_DETAILS} from '../Actions/actionDetails';

const initialState = {
  itemDetails: {},
};

export const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_MOVIE_DETAILS:
      return {
        ...state,
        itemDetails: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
