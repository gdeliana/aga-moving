import appReducer from '../reducers/appReducer';
import { createStore, applyMiddleware, combineReducers } from"redux";
import thunk from 'redux-thunk';

const createReducer = (additionalReducers) => {
	return combineReducers({
		app: appReducer,
		...additionalReducers
	})
};

const appStore = createStore(createReducer(), applyMiddleware(thunk));

export default appStore;
