import axios from 'axios';
import {
    CLIENT_SERVICES_API,
    ERROR_IN_FETCH_CLIENT_SERVICES,
    RECEIVE_CLIENT_SERVICES,
    FETCH_CLIENT_SERVICES} from './constants';

const fetch = ()=>{
    return {
        type: FETCH_CLIENT_SERVICES
    }
}
const receiveClientServices = (services) =>{
    return {
        type: RECEIVE_CLIENT_SERVICES,
        services
    }
}
const failInClientServices = (error) => {
    return {
        type: ERROR_IN_FETCH_CLIENT_SERVICES,
        error
    }
}
export const fetchClientServices = ()=>{

    return dispatch => {
        dispatch(fetch());
        axios.get(CLIENT_SERVICES_API)
        .then(response => response.data.services)
        .then(services => dispatch(receiveClientServices(services)))
        .catch(error => dispatch(failInClientServices(error)))
    }
}