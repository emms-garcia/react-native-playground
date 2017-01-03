import { combineReducers } from 'redux';

import ItemFormReducer from './ItemFormReducer';
import ItemsReducer from './ItemsReducer';

export default combineReducers({
  itemForm: ItemFormReducer,
  items: ItemsReducer,
});
