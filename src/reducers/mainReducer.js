import initialState from '../FormContext.js';

export default function mainReducer (state = initialState, action) {
	switch (action.type) {
		case "UPDATEFORM":
			console.log(state, action);
			let key_levels = action.name.split('__');
			let depth = key_levels.length;
			let obj = {};
			if(depth === 3){
				obj[key_levels[0]][key_levels[1]][key_levels[3]] = action.value;
			}else if(depth === 2){
				obj[key_levels[0]][key_levels[1]] = action.value;
			}else if (depth === 1){
				obj[key_levels[0]] = action.value;
			}
			return Object.assign({}, state, obj);
		default:
			return state;
	}
}
