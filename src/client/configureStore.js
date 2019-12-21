import {
    createStore, applyMiddleware, compose,
  } from 'redux';
  import thunk from 'redux-thunk';
  import { createBrowserHistory } from 'history';
  
  import { connectRouter, routerMiddleware } from 'connected-react-router';
  import reducers from './reducers';
  
  export const history = createBrowserHistory();
  export const configureStore = () => {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(connectRouter(history)(reducers), composeEnhancer(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ));
  };