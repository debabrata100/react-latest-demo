import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { routerMiddleware } from "connected-react-router";

import createReducer from "./reducers";

// sagas
import { watchAsyncUp } from './containers/Home/saga';

const sagaMiddleWare = createSagaMiddleWare();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




// create store here
// const store = createStore(createReducer(), composeEnhancers(applyMiddleware(sagaMiddleWare)) );
const initializeStore = (history) => {
    const middlewares = [sagaMiddleWare, routerMiddleware(history)];
    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(
        createReducer(),
        {},
        composeEnhancers(...enhancers),
      );
    store.asyncReducers = {};
    store.injectReducer = (key,reducer) => {
        store.asyncReducers[key] = reducer
        store.replaceReducer(createReducer(store.asyncReducers))
        return store;
    }
    
    // run sagas
    sagaMiddleWare.run(watchAsyncUp);
    return store;

}

export default initializeStore;