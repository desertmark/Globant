import {NEXT,
        PREV,
        INIT,
        ERROR_IN_FETCH_SLIDE_SHOW,
        FETCH_SLIDE_SHOW,
        RECEIVE_SLIDE_SHOW
    } from './constants';

export const Slider = (state = { activeImage:'' }, action) => {
    switch (action.type){
        case INIT:
            return Object.assign({},state,{
                    activeImage: action.image
                });            
        case NEXT:
            let nextIndex = action.images.indexOf(action.image) + 1;
            if(nextIndex == action.images.length){
                nextIndex = 0;
            }
            let nextImage = action.images[nextIndex];
            return Object.assign({},state,{
                activeImage: nextImage
            });            
        case PREV:
            return Object.assign({},state,{
                activeImage: action.image
            });            
        default:
            return state;            
    }
}

export const SliderApi = (state = {isFetching: false, images:[], error: null}, action) => {
    switch (action.type){
        case FETCH_SLIDE_SHOW:
            return Object.assign({},state,{
                isFetching: true
            });

        case RECEIVE_SLIDE_SHOW:
            return Object.assign({},state,{
                isFetching: false,
                images: action.images
            });
        case ERROR_IN_FETCH_SLIDE_SHOW:
            return Object.assign({},state,{
                isFetching: false,
                hasError: true,
                error: action.error
            });
        default:
            return state
    }
}
