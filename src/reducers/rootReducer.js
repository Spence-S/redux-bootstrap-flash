
import { SHOW_FLASH, HIDE_FLASH } from '../actions';

const initialState = {
  show: false,
  message: '',
  status: ''
}

export default function flashState (state = initialState, action){
  switch(action.type){
    case SHOW_FLASH:
      return {
        ...state,
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
