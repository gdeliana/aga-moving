import { FETCH_MATERIALS_BEGIN, FETCH_MATERIALS_SUCCESS, FETCH_MATERIALS_ERROR } from '../actions/packingMaterialsActions.js';

const initialState = {
	payload: [],
	error: null,
	loading: false
}

export default function materialsReducer (state = initialState, action) {
	switch (action.type) {
		case FETCH_MATERIALS_BEGIN:
			return {
				error: false,
				loading: true,
				payload: []
			};
		case FETCH_MATERIALS_SUCCESS:
			return {
				...state,
				error: false,
				loading: false,
				payload: action.payload
			};
		case FETCH_MATERIALS_ERROR:
			return {
				...state,
				loading: false,
				error: action.error
			};
		default:
			return state;
	}
}
