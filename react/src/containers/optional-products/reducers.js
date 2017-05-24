import {
    FETCH_OPTIONAL_PRODUCTS,
    RECEIVE_OPTIONAL_PRODUCTS,
    ERROR_IN_FETCH_OPTIONAL_PRODUCTS
} from './constants'

const optionalProducts = (state = {isFetching: false, products:[], error: null}, action ) =>{
    switch (action.type) {
        case FETCH_OPTIONAL_PRODUCTS:
            return Object.assign({},state, {
                isFetching: true
            });
            break;
        case RECEIVE_OPTIONAL_PRODUCTS:
            return Object.assign({},state, {
                isFetching: false, 
                products: action.optionalProducts
            });
            break;
        case ERROR_IN_FETCH_OPTIONAL_PRODUCTS:
            return Object.assign({},state, {
                isFetching: true,
                hasError: true,
                error: action.error,
            })
            break;
        default:
            return state;
            break;
    }
}

export default optionalProducts;