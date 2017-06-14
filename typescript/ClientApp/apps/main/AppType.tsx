export interface AppStateType {
    ready:boolean;
    busy:boolean;
}

export interface AppActionType {
    type:string;
    data:any;
}

export interface AppDispatchType {
    appGetBusy():AppActionType;
    appGetReady():AppActionType;
}
type AppProps = {
    name:string;
}
export type AppType = AppStateType & AppDispatchType