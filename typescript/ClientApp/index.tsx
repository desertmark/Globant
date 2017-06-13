//REACT
import * as React from "react";
import * as ReactDOM from "react-dom";

//REDUX
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

//ROUTING
import {Route} from 'react-router';
import {createBrowserHistory} from 'history';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';

//Components
import {Hello} from './components/Hello';

const history = createBrowserHistory();
const routing = routerMiddleware(history);
const middleware = applyMiddleware(routing)(createStore);
const store = middleware(null);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={Hello} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("react-app")
);