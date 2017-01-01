import {
  ITEM_CREATE,
  ITEM_DELETE,
  ITEM_EDIT,
} from '../actions/types';
import { getUID } from '../Utils';

const initialState = {
  0: { name: 'name', quantity: '1', price: '1', uid: 0 },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEM_CREATE:
      return {
        ...state,
        [getUID()]: action.payload,
      };
    case ITEM_DELETE:
      delete state[action.payload];
      return { ...state };
    case ITEM_EDIT:
      return {
        ...state,
        [action.payload.uid]: action.payload,
      };
    default:
      return state;
  }
};
