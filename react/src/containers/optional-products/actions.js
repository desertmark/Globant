import axios from 'axios';
import {
    OPTIONAL_PRODUCTS_API,
    FETCH_OPTIONAL_PRODUCTS,
    RECEIVE_OPTIONAL_PRODUCTS,
    ERROR_IN_FETCH_OPTIONAL_PRODUCTS,

    OPTIONAL_PRODUCTS_SLIDE_SHOW,
    FETCH_SLIDE_SHOW,
    RECEIVE_SLIDE_SHOW,
    ERROR_IN_FETCH_SLIDE_SHOW
} from './constants'
//CARDS
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
//SLIDE SHOW
const fetchSlide = () =>{
    return {
        type: FETCH_SLIDE_SHOW
    }
}

const receiveSlideShow = (images) =>{
    return {
        type:RECEIVE_SLIDE_SHOW,
        images
    }
}

const failInSlideShow = (error) => {
    return {
        type:ERROR_IN_FETCH_SLIDE_SHOW,
        error
    }
}

export const fetchSlideShow = () =>{
    return dispatch => {
        dispatch(fetchSlide())
        axios
        .get(OPTIONAL_PRODUCTS_SLIDE_SHOW)
        .then(response => response.data.images)
        .then(images => dispatch(receiveSlideShow(images)))
        .catch(error => dispatch(failInSlideShow(error)))
    }
}