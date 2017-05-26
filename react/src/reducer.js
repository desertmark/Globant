import { combineReducers } from 'redux';
import app from './app-reducers';
import {optionalProducts,slideShow} from './containers/optional-products/reducers';
import cards from './containers/card-container/reducer';
import Slider from './components/slider/reducer';
import  {routerReducer} from 'react-router-redux';


const reducers = combineReducers({
    app,
    optionalProducts,
    slideShow,
    Slider,
    routing: routerReducer
});

export default reducers;