import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../../reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../saga';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [
    // list middleware
    thunk,
    sagaMiddleware,
  ];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
