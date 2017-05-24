import React from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router';
import App from './App.jsx';
import {connect} from 'react-redux';

class Router extends React.Component{
    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                <Route path="/" component={App} />
            </ConnectedRouter>
        );
    }
}

export default connect()(Router);