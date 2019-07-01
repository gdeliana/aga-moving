import { FETCH_GALLERY_BEGIN, FETCH_GALLERY_SUCCESS, FETCH_GALLERY_ERROR } from '../actions/galleryActions.js';
const initialState = {
	images : [],
	loading: false,
	error : false
}

export default function galleryReducer (state = initialState, action) {
	switch (action.type) {
		case FETCH_GALLERY_BEGIN:
			return {
				images: [],
				loading: true,
				error: false
			}
		case FETCH_GALLERY_SUCCESS:
			return {
				images: action.payload,
				loading: false,
				error: false
			}
		case FETCH_GALLERY_ERROR:
			return {
				images: [],
				loading: false,
				error: true
			}
		default:
			return state;
	}
}
