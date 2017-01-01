import {
  ITEMS_FETCH,
  ITEM_CREATE,
  ITEM_DELETE,
  ITEM_EDIT,
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_FETCH:
      return { ...action.payload };
      case ITEM_CREATE:
        return { ...state, ...action.payload };
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
