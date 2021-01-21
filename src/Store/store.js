import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {allReducers} from './Reducers/allReducers';

const Store = createStore(allReducers, applyMiddleware(thunk, logger));

export default Store;
