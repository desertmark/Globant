import {
    FETCH_OPTIONAL_PRODUCTS,
    RECEIVE_OPTIONAL_PRODUCTS,
    ERROR_IN_FETCH_OPTIONAL_PRODUCTS,
    
    FETCH_SLIDE_SHOW,
    RECEIVE_SLIDE_SHOW,
    ERROR_IN_FETCH_SLIDE_SHOW
} from './constants'

export const optionalProducts = (state = {isFetching: false, products:[], error: null}, action ) =>{
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
            });
            break;
        default:
            return state;
            break;
    }
}

export const slideShow = (state = {isFetching: false, images:[], error: null}, action) => {
    switch (action.type){
        case FETCH_SLIDE_SHOW:
            return Object.assign({},state,{
                isFetching: true
            });
            break;
        case RECEIVE_SLIDE_SHOW:
            return Object.assign({},state,{
                isFetching: false,
                images: action.images
            });
            break;
        case ERROR_IN_FETCH_SLIDE_SHOW:
            return Object.assign({},state,{
                isFetching: false,
                hasError: true,
                error: action.error
            });
            break;
        default:
            return state
            break;
    }
}