import {NEXT,PREV, INIT} from './constants';
const nextSlide  = (image,images) => {
    // let nextIndex = images.indexOf(image) + 1;
    // if(nextIndex == images.length){
    //     nextIndex = 0;
    // }
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