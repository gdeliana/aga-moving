import initialState from '../FormContext.js';
import AddressAutocomplete from 'google-address-autocomplete';
// action parameters is the one defined in the actions
// action parameter is overwritten before with the mapStateToProps object
export default function mainReducer (state = initialState, action) {
	console.log(state, action);
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
		case "MAPSAUTOCOMPLETE":
			console.log(AddressAutocomplete);
			let ac = new AddressAutocomplete('#'+action.name, (results) => {
				const addressObject = results;
				console.log(results);
			});
			console.log(ac);
			return state;
		case 'VALIDATEINPUT':

		return state;
		default:
			return state;
	}
}