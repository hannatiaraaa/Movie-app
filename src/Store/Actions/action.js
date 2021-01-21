export const FILL_MOVIES = 'FILL_MOVIES';

export const actionFillMovies = (data) => (dispatch) => {
  dispatch({
    type: 'FILL_MOVIES',
    payload: data,
  });
};
