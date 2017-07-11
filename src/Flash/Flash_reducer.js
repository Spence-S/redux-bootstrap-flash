
import { SHOW_FLASH, HIDE_FLASH } from './Flash_actions';

const initialState = {
  show: true,
  message: '',
  status: ''
}

export function flashState (state = initialState, action){
  switch(action.type){
    case SHOW_FLASH:
      return {
        status: action.status,
        message: action.message,
        show: true
      }
    case HIDE_FLASH:
      return {
        ...state,
        show: false
      }
    default:
      return state;
  }
}
