import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, createLogger()));
  return (
    <Provider store={store}><Router /></Provider>
  );
};

export default App;
