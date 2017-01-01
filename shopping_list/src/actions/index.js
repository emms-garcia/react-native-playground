import {
  ITEM_DELETE,
  ITEM_EDIT,
  ITEM_CREATE,
  ITEM_FORM_CLEAR,
  ITEM_FORM_UPDATE,
} from '../actions/types';

export const clearItemForm = () => {
  return { type: ITEM_FORM_CLEAR };
};

export const createItem = ({ name, quantity, price }) => {
  return {
    type: ITEM_CREATE,
    payload: { name, quantity, price },
  };
};

export const deleteItem = (uid) => {
  return {
    type: ITEM_DELETE,
    payload: uid,
  };
};

export const editItem = ({ name, quantity, price, uid }) => {
  return {
    type: ITEM_EDIT,
    payload: { name, quantity, price, uid },
  };
};

export const updateItemForm = (prop, value) => {
  return {
    type: ITEM_FORM_UPDATE,
    payload: { [prop]: value },
  };
};
