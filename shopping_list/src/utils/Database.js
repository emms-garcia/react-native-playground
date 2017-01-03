import { AsyncStorage } from 'react-native';

export const Database = {
  get: (key) => {
    return AsyncStorage.getItem(key)
    .then((result) => {
      return JSON.parse(result);
    });
  },

  store: (key, data, callback) => {
    return AsyncStorage.setItem(key, JSON.stringify(data), callback);
  },

  remove: (key) => {
    return AsyncStorage.removeItem(key);
  },
};
