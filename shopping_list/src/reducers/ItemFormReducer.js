import {
  ITEM_FORM_CLEAR,
  ITEM_FORM_UPDATE,
} from '../actions/types';

const initialState = { name: '', quantity: '0', price: '0' };

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEM_FORM_CLEAR:
      return { ...initialState };
    case ITEM_FORM_UPDATE:
      // payload = { prop, value }
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
