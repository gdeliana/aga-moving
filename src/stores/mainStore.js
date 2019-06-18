import mainReducer from '../reducers/mainReducer';
import vehicleReducer from '../reducers/vehicleReducer';
import materialsReducer from '../reducers/materialsReducer';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
	main: mainReducer,
	vehicle: vehicleReducer,
	materials: materialsReducer
}), applyMiddleware(thunk));



export default store;
