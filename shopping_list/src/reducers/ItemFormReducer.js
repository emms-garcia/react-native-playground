import {
  ITEM_FORM_CLEAR,
  ITEM_FORM_UPDATE,
} from '../actions/Types';

const initialState = { name: '', quantity: '1', price: '0', checked: true };

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
