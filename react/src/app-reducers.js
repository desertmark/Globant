//REDUCERS QUE MANEJAN LAS ACCIONES DEFINIDAS EN app-actions.js
//Un reducer recibe 2 parametros state que puede tener valores por defectos y el action.
import {APP_GET_BUSY, APP_GET_READY} from './app-constants';

const app = (state = {ready: false}, action) => {
    switch(action.type){
        case APP_GET_BUSY:
            return Object.assign({},state, {
                ready: false,
                busy: true
            });
        case APP_GET_READY:
            return Object.assign({},state,{
                ready: true,
                busy: false
            });
        default:
            return state;
    }
}
export default app;