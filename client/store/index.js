import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Cookies from 'js-cookie';
import { createCookieMiddleware } from 'redux-cookie';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({});

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    createCookieMiddleware(Cookies),
    createLogger({ collapsed: true })
  )
);
const store = createStore(reducer, middleware);

export default store;
