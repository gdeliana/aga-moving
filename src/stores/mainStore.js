import mainReducer from '../reducers/mainReducer';
import vehicleReducer from '../reducers/vehicleReducer';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
	main: mainReducer,
	vehicle: vehicleReducer
}), applyMiddleware(thunk));



export default store;
