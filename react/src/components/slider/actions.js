import {NEXT,
        PREV, 
        INIT, 
        FETCH_SLIDE_SHOW,
        ERROR_IN_FETCH_SLIDE_SHOW,
        RECEIVE_SLIDE_SHOW
    } from './constants';
import axios from 'axios';

const nextSlide  = (image,images) => {
    return {
        type:NEXT,
        images,
        image
    }
}

const prevSlide = () => {
    return {
        type:PREV
    }
}

export const next = (image,images) => {
    return dispatch => {
        dispatch(nextSlide(image,images));       
    }
}

export const prev = () => {
    return dispatch => {
        dispatch(prevSlide());       
        alert('prev');
    }
}

export const init = (image) => {
    return {
        type: INIT,
        image
    }
}

//FETCH SLIDE
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

export const fetchSlideShow = (url) =>{
    return dispatch => {
        dispatch(fetchSlide())
        axios
        .get(url)
        .then(response => response.data.images)
        .then(function(images){
            dispatch(init(images[0]));
            return dispatch(receiveSlideShow(images));
        })
        .catch(error => dispatch(failInSlideShow(error)))
    }
}