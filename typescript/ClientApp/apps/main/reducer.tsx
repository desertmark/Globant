import {appGetBusy, appGetReady, AppActionType} from './actions';


export interface AppStateType {
    ready:boolean;
    busy:boolean;
}

export const AppReducer = (state: AppStateType = {ready:true, busy:false}, action: AppActionType): AppStateType => {
  switch (action.type) {
    case 'APP_GET_BUSY':
      return { ...state, ready:false, busy:true };
    case 'APP_GET_READY':
      return { ...state, ready:true, busy:false };
  }
  return state;
}