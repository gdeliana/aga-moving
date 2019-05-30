import mainReducer from '../reducers/mainReducer';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
