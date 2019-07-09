import galleryReducer from '../reducers/galleryReducer';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

const galleryStore = createStore(combineReducers({
		gallery: galleryReducer
	}), applyMiddleware(thunk));

export default galleryStore;
