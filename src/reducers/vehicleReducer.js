import { FETCH_VEHICLES_BEGIN, FETCH_VEHICLES_SUCCESS, FETCH_VEHICLES_FAILURE } from '../actions/vehicleActions.js';
//import vehicles from '../Vehicles.json';

const vehiclesState = {
	vehicles: [],
	loading: false,
	error: null
}

export default function vehicleReducer (state = vehiclesState, action) {
	switch (action.type) {
		case FETCH_VEHICLES_BEGIN :
			return {
				...state,
				error: null,
				loading: true
			}
		case FETCH_VEHICLES_SUCCESS:
			return {
				loading: false,
				error:false,
				vehicles: action.payload,
			}
		case FETCH_VEHICLES_FAILURE:
			return {
				loading: false,
				error: true,
				vehicles: []
			}
		default:
			return state;
	};
}
