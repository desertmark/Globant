import React, {Component} from 'react';
import {connect} from 'react-redux'; //por ser contenedor
import {fetchOPtionalProducts} from './actions';
import {bindActionCreators} from 'redux';

import CardContainer from '../../containers/card-container/CardContainer.jsx';

class OptionalProducts extends Component{
    componentWillMount(){
        this.props.fetchOPtionalProducts();
    }
    render(){
        return (
            <div>
                {/*Slide show*/}
                {/*Card container*/}
                {this.props.isFetching && <div> loading... </div>}           
                {this.props.products.length > 0 && <CardContainer cards = { this.props.products } />}
                Optional Products Page.
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isFetching: state.optionalProducts.isFetching,
        products: state.optionalProducts.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            fetchOPtionalProducts
        }, dispatch);
    
}
export default connect(mapStateToProps,mapDispatchToProps)(OptionalProducts);