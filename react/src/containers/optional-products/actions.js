import axios from 'axios';
import {
    OPTIONAL_PRODUCTS_API,
    FETCH_OPTIONAL_PRODUCTS,
    RECEIVE_OPTIONAL_PRODUCTS,
    ERROR_IN_FETCH_OPTIONAL_PRODUCTS
} from './constants'

const fetch = ()=>{
    return {
        type: FETCH_OPTIONAL_PRODUCTS
    }
}
const receiveOptionalProducts = (optionalProducts) =>{
    return {
        type: RECEIVE_OPTIONAL_PRODUCTS,
        optionalProducts
    }
}
const failInOptionalProducts = (error) => {
    return {
        type: ERROR_IN_FETCH_OPTIONAL_PRODUCTS,
        error
    }
}
export const fetchOPtionalProducts = ()=>{
    return dispatch => {
        dispatch(fetch());
        axios
        .get(OPTIONAL_PRODUCTS_API)
        .then(response => response.data.products)
        .then(products => dispatch(receiveOptionalProducts(products)))
        .catch(error => dispatch(failInOptionalProducts(error)))
        
    }
}