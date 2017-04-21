import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';
//import { asyncMiddleware } from 'redux-amrc';
import { routerMiddleware, push } from 'react-router-redux';
import { browserHistory } from 'react-router';

import DevTools from './DevTools';
import createFetchMiddleware from 'redux-composable-fetch';

const FetchMiddleware = createFetchMiddleware({
  afterFetch({ action, result }) {
    return result.json().then(data => {
      return Promise.resolve({
        action,
        result: data,
      });
    });
  },
});

// Apply the middleware to the store
const middleware = routerMiddleware(browserHistory)

let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = compose(
    applyMiddleware(middleware,thunk,FetchMiddleware),
  )(createStore);
} else {
  createStoreWithMiddleware = compose(
    applyMiddleware(middleware,thunk,FetchMiddleware),
    DevTools.instrument(),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore);
}

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
