import {AppActionType} from './AppType';

export const appGetBusy = (data:any):AppActionType => {
    return {
        type: 'APP_GET_BUSY',
        data
    }
}

export const appGetReady = (data:any):AppActionType => {
    return {
        type: 'APP_GET_READY',
        data
    }
}
