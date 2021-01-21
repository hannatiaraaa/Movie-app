import {combineReducers} from 'redux';
import {TrendingReducer} from './TrendingReducer';
import {NowPlayingReducer} from './NowPlayingReducer';
import {DetailsReducer} from './DetailsReducer';

export const allReducers = combineReducers({
  TrendingReducer,
  NowPlayingReducer,
  DetailsReducer,
});
