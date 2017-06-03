import {PLAY,
        PAUSE,
        NEXT,
        PREV,
        INIT,
        ERROR_IN_FETCH_SLIDE_SHOW,
        FETCH_SLIDE_SHOW,
        RECEIVE_SLIDE_SHOW
    } from './constants';
//Utility functions
const getNextImage = (image, images)=>{
    let nextIndex = images.indexOf(image) + 1;
    if(nextIndex == images.length){
        nextIndex = 0;
    }
    return images[nextIndex];
}

const getPrevImage = (image, images)=>{
    let nextIndex = images.indexOf(image) - 1;
    if(nextIndex <0){
        nextIndex = images.length - 1;
    }
    console.log(nextIndex);
    return images[nextIndex];
}
/**
 * Reducers for component actions
 * @param {*(state = { activeImage:'' , isPlayin:false, isPaused:true}} state
 */
export const Slider = (state = { activeImage:'' , isPlayin:false, isPaused:true, playIntervalId:null}, action) => {
    switch (action.type){
        case INIT:
            return Object.assign({},state,{
                    activeImage: action.image
                });            
        case NEXT:
            return Object.assign({},state,{
                activeImage: getNextImage(action.image, action.images)
            });            
        case PREV:
            return Object.assign({},state,{
                activeImage: getPrevImage(action.image, action.images)
            }); 
        case PLAY:
            return Object.assign({}, state, {
                isPlaying: action.isPlaying,
                isPaused: action.isPaused,
                playIntervalId: action.playIntervalId
            })
        case PAUSE:
            return Object.assign({}, state, {
                isPlaying: action.isPlaying,
                isPaused: action.isPaused,
                playIntervalId: null
            })           
        default:
            return state;            
    }
}
/**
 * Reducer for fetching slides and handling sucess and fail ajax calls.
 * @param {*state = {isFetching: false, images:[], error: null}} state 
 */
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
