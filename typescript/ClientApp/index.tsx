//REACT
import * as React from "react";
import * as ReactDOM from "react-dom";

//REDUX
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

//ROUTING
import {Route, RouteProps} from 'react-router-dom';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';

//MiddleWare
import {createLogger} from 'redux-logger';
import {createBrowserHistory} from 'history';
//Components
import App from './apps/main/App';
//import Router from './Router';


const logger = createLogger();
const history = createBrowserHistory();
const routing = routerMiddleware(history);
const middleware = applyMiddleware(logger,routing)(createStore);
const store = middleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter>
            <Route path="/" />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("react-app")
);