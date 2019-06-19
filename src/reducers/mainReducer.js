import initialState from '../FormContext.js';
// action parameters is the one defined in the actions
// action parameter is overwritten before with the mapStateToProps object
export default function mainReducer (state = initialState, action) {
	switch (action.type) {
		case "UPDATEFORM":
			let key_levels = action.name.split('__');
			let depth = key_levels.length;
			let obj = {};
			if(depth === 3){
				obj[key_levels[0]] = state[key_levels[0]];
				obj[key_levels[0]][key_levels[1]] = state[key_levels[0]][key_levels[1]];
				obj[key_levels[0]][key_levels[1]][key_levels[2]] = action.value;
			}else if(depth === 2){
				obj[key_levels[0]] = state[key_levels[0]];
				obj[key_levels[0]][key_levels[1]] = action.value;
			}else if (depth === 1){
				obj[key_levels[0]] = action.value;
			}
			return Object.assign({}, state, obj);
		case 'VALIDATEINPUT':
			let errors = state.errors;
			if(errors === null){
				errors = {};
			}
			errors[action.name] = action.error;
			return Object.assign({}, state, {
				errors
			});
		case 'UPDATEVEHICLEWORKER':
			return Object.assign({}, state, {
				vehicle: action.vehicle,
				workers: action.workers
			});
		case 'SUBMITFORM':
			let formErrors = state.errors;
			let isValidForm = true;
			let errorMessages = [];
			for (let fieldName in formErrors){
				let invalidField = formErrors[fieldName];
				if(invalidField){
					isValidForm = false;
					errorMessages.push('Please correct '+fieldName);
				}
			}
			if(!isValidForm){
				return Object.assign({}, state, {
					valid: isValidForm,
					errorMessages
				});
			}else{
				return Object.assign({}, state, {
					valid: isValidForm,
					successMessages : ["You have successfully booked a moving date!"]
				});
			}
		case 'UPDATEMATERIALQUANTITY':
			const current = state.packing_materials;
			const quantity = parseInt(action.quantity) > 0 ? parseInt(action.quantity) : 0;
			if(quantity > 0){
				return Object.assign({}, state, {
					packing_materials : {
						...current,
						[action.id] : quantity
					}
				});
			}else{
				return state;
			}
		default:
			return state;
	}
}
