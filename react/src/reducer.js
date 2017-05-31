import { combineReducers } from 'redux';
import app from './app-reducers';

//Paginas
import {optionalProducts,slideShow} from './containers/optional-products/reducers';
import {clientServices} from './containers/client-services/reducer';
//Componentes
import cards from './containers/card-container/reducer';
import Slider from './components/slider/reducer';

import  {routerReducer} from 'react-router-redux';


const reducers = combineReducers({
    app,
    optionalProducts,
    clientServices,
    slideShow,
    Slider,
    routing: routerReducer
});

export default reducers;