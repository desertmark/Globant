//React
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//Router
import  {Route, RouteProps} from 'react-router';
//App
import {appGetBusy, appGetReady} from './actions';
import {AppDispatchType, AppStateType, AppType} from './AppType';
//Component
import Home from '../../components/Hello';

class App extends React.Component<AppType, any>{
    
    componentWillMount(){
        this.props.appGetBusy();
    }
    componentDidMount(){
        this.props.appGetReady();
    }  
    
    render(){
        return <div>
                    <h1>App</h1>
                </div>;
    }
}

const mapStateToProps = (state:any) =>{
    return {
        ready: state.AppReducer.ready,
        busy: state.AppReducer.busy
    }
}

const mapDispatchToProp = (dispatch:any)  => {
    return bindActionCreators({appGetBusy, appGetReady}, dispatch);
}

export default connect<AppStateType, AppDispatchType, any>(mapStateToProps,mapDispatchToProp)(App)
