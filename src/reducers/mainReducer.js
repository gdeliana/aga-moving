import initialState from '../FormContext.js';

export default function mainReducer (state = initialState, action) {
	switch (action.type) {
		case "UPDATEFORM":
			console.log(state, action);
			let key_levels = action.name.split('__');
			let obj;
			if(key_levels.length === 2){
				obj = {
					[key_levels[0]] : {
						[key_levels[1]] : action.value
					}
				}
			}else if (key_levels.length === 1){
				obj = {
					[key_levels[0]] : action.value
				}
			}
			return Object.assign({}, state, obj);
		default:
			return state;
	}
}
