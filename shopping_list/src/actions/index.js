import { Actions } from 'react-native-router-flux';

import {
  ITEM_CREATE,
  ITEM_DELETE,
  ITEM_EDIT,
  ITEMS_FETCH,
  ITEM_FORM_CLEAR,
  ITEM_FORM_UPDATE,
} from '../actions/Types';
import { Database, getUID } from '../utils';

export const clearItemForm = () => {
  return { type: ITEM_FORM_CLEAR };
};

export const createItem = ({ checked, name, quantity, price }) => {
  const newItem = { [getUID()]: { checked, name, quantity, price } };
  return (dispatch, getState) => {
    const { items } = getState();
    Database.store('items', {
      ...items, ...newItem,
    }, () => {
      dispatch({ type: ITEM_CREATE, payload: newItem });
      Actions.itemList({ type: 'reset' });
    });
  };
};

export const deleteItem = (uid) => {
  return (dispatch, getState) => {
    const { items } = getState();
    Database.store('items', {
      ...items, [uid]: undefined,
    }, () => {
      dispatch({ type: ITEM_DELETE, payload: uid });
      Actions.itemList({ type: 'reset' });
    });
  };
};

export const editItem = ({ checked, name, quantity, price, uid }) => {
  return (dispatch, getState) => {
    const { items } = getState();
    Database.store('items', {
      ...items, [uid]: { checked, name, quantity, price },
    }, () => {
      dispatch({ type: ITEM_EDIT, payload: { checked, name, quantity, price, uid } });
      Actions.itemList({ type: 'reset' });
    });
  };
};

export const fetchItems = () => {
  return (dispatch) => {
    Database.get('items').then((items) => {
      dispatch({
        type: ITEMS_FETCH,
        payload: items || {},
      });
    });
  };
};

export const updateItemForm = (prop, value) => {
  return {
    type: ITEM_FORM_UPDATE,
    payload: { [prop]: value },
  };
};
