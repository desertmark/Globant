//React
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//Router
import  {Route, RouteProps} from 'react-router';
//App
//import {appGetBusy, appGetReady} from './app-actions';
//Pages

export interface AppProps{
    
}


export class App extends React.Component<AppProps, undefined>{
    render(){
        return <div>
                    <h1>App</h1>
                </div>;
    }
}