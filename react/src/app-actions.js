//ACCIONES DE LA APLICACION
//1. OCUPADO --> Haciendo una transaccion.
//2. LIBRE --> Los componentes ya terminaron de hacer la transaccion.
import {APP_GET_BUSY, APP_GET_READY} from './app-constants';

export const appGetBusy = (data) => {
    return {
        type: APP_GET_BUSY,
        data
    }
}

export const appGetReady = (data) => {
    return {
        type: APP_GET_READY,
        data
    }
}