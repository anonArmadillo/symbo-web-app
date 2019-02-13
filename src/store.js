import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const inititalState = {};

const store = createStore(
    rootReducer,
    inititalState,
    applyMiddleware(thunk)
);

export default store;
