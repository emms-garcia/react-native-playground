import {
  EMPLOYEE_CREATE,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_UPDATE,
} from '../actions/types';

const initialState = { name: '', phone: '', shift: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE:
    case EMPLOYEE_DELETE_SUCCESS:
    case EMPLOYEE_SAVE_SUCCESS:
      return { ...state, ...initialState };
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    default:
      return state;
  }
};
