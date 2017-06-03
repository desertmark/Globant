import React, {Component} from 'react';
import {connect} from 'react-redux'; //por ser contenedor
import {fetchOPtionalProducts, fetchSlideShow} from './actions';
import {bindActionCreators} from 'redux';
import {OPTIONAL_PRODUCTS_SLIDE_SHOW} from './constants';
import Slider from '../../components/slider/Slider.jsx';
import CardContainer from '../../containers/card-container/CardContainer.jsx';

class OptionalProducts extends Component{
    componentWillMount(){
        this.props.fetchOPtionalProducts();
        this.props.fetchSlideShow();
    }
    render(){
        return (
            <div>
                {this.props.images.length > 0 && <Slider url={OPTIONAL_PRODUCTS_SLIDE_SHOW} interval={3000} />}
                <br/>
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
        products: state.optionalProducts.products,
        
        isFetchingSlides: state.slideShow.isFetching,
        images: state.slideShow.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            fetchOPtionalProducts,
            fetchSlideShow
        }, dispatch);
    
}
export default connect(mapStateToProps,mapDispatchToProps)(OptionalProducts);