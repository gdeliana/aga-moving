import { FETCH_MATERIALS_BEGIN, FETCH_MATERIALS_SUCCESS, FETCH_MATERIALS_ERROR } from '../actions/packingMaterialsActions.js';

const initialState = {
	materials: [],
	error: null,
	loading: false
}

export default function materialsReducer (state = initialState, action) {
	switch (action.type) {
		case FETCH_MATERIALS_BEGIN:
			return {
				...state,
				loading: true
			};
		case FETCH_MATERIALS_SUCCESS:
			return {
				...state,
				materials: action.payload
			};
		case FETCH_MATERIALS_ERROR:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
}
