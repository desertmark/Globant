//REACT
import * as React from "react";
import * as ReactDOM from "react-dom";

//REDUX
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

//ROUTING
import {Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';

//Components
import {App} from './apps/main/App';

const history = createBrowserHistory();
const routing = routerMiddleware(history);
const middleware = applyMiddleware(routing)(createStore);
const store = middleware(reducers);

ReactDOM.render(

    <App />,
    document.getElementById("react-app")
);

    /*<Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component = {App} />
        </ConnectedRouter>
    </Provider>,*/