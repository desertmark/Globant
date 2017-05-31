import {
    CLIENT_SERVICES_API,
    ERROR_IN_FETCH_CLIENT_SERVICES,
    RECEIVE_CLIENT_SERVICES,
    FETCH_CLIENT_SERVICES} from './constants';

    export const clientServices = (state = {isFetching: false, services:[], error: null}, action ) =>{
    switch (action.type) {
        case FETCH_CLIENT_SERVICES:
            return Object.assign({},state, {
                isFetching: true
            });
            break;
        case RECEIVE_CLIENT_SERVICES:
            return Object.assign({},state, {
                isFetching: false, 
                services: action.services
            });
            break;
        case ERROR_IN_FETCH_CLIENT_SERVICES:
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