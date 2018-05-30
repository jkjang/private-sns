import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducer';

export const history = createHistory();
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
