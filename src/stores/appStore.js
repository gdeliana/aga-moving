import appReducer from '../reducers/appReducer';
import { createStore, applyMiddleware, combineReducers } from"redux";
import thunk from 'redux-thunk';

const appStore = createStore(combineReducers({
	app: appReducer,
}), applyMiddleware(thunk));



export default appStore;
