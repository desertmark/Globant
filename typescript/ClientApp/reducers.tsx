import { combineReducers } from 'redux';

import  {routerReducer} from 'react-router-redux';

import {AppReducer} from './apps/main/reducer';

const reducers = combineReducers({
    AppReducer,
    routerReducer
});

export default reducers;
