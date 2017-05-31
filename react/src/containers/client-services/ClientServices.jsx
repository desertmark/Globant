import React, {Component} from 'react';
import {connect} from 'react-redux'; //por ser contenedor
import CardContainer from '../card-container/CardContainer.jsx';
import {bindActionCreators} from 'redux';
import {fetchClientServices} from './actions';

class ClientServices extends Component{
    componentWillMount(){
        this.props.fetchClientServices();
    }
    render(){
        return (
            <div>
                Client Services  Page.
                {this.props.services.length > 0 && <CardContainer cards = {this.props.services}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        isFetching: state.clientServices.isFetching,
        services: state.clientServices.services
    }
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        fetchClientServices
    },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ClientServices);