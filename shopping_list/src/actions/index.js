import { Actions } from 'react-native-router-flux';
import {
  ITEM_CREATE,
  ITEM_DELETE,
  ITEM_EDIT,
  ITEMS_FETCH,
  ITEM_FORM_CLEAR,
  ITEM_FORM_UPDATE,
} from '../actions/types';
import { getUID } from '../utils';
import Database from '../utils/Database';

export const clearItemForm = () => {
  return { type: ITEM_FORM_CLEAR };
};

export const createItem = ({ name, quantity, price }) => {
  const newItem = { [getUID()]: { name, quantity, price } };
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

export const editItem = ({ name, quantity, price, uid }) => {
  return (dispatch, getState) => {
    const { items } = getState();
    Database.store('items', {
      ...items, [uid]: { name, quantity, price },
    }, () => {
      dispatch({ type: ITEM_EDIT, payload: { name, quantity, price, uid } });
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
