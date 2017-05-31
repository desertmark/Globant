import {NEXT,PREV,INIT} from './constants';

const Slider = (state = { activeImage:'' }, action) => {
    switch (action.type){
        case INIT:
            return Object.assign({},state,{
                    activeImage: action.image
                });
            break;
        case NEXT:
            let nextIndex = action.images.indexOf(action.image) + 1;
            if(nextIndex == action.images.length){
                nextIndex = 0;
            }
            let nextImage = action.images[nextIndex];
            return Object.assign({},state,{
                activeImage: nextImage
            });
            break;
        case PREV:
            return Object.assign({},state,{
                activeImage: action.image
            });
            break;
        default:
            return state;
            break;
    }
}

export default Slider;