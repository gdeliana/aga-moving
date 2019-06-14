import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import vehicleReducer from '../reducers/vehicleReducer';

const vehicleStore = createStore(vehicleReducer, applyMiddleware(thunk));

export default vehicleStore;
