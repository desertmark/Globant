export interface AppActionType {
    type:string;
    data:any;
}

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
