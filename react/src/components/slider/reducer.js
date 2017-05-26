import {NEXT,PREV} from './constants';

const Slider = (state = { activeImage:'' }, action) => {
    switch (action.type){
        case NEXT:
            return Object.assign({},state,{
                activeImage: action.nextImage
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