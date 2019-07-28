import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
// import { createBrowserHistory } from 'history';

import { rootReducer } from './index';

const composeEnhancers = (window && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// export const history = createBrowserHistory();

window.store = store;

export default store;