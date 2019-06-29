export const mapStateToProps = (state, ownProps) => {
	let storeKey = ownProps.storeKey || 'main';
	state = state[storeKey];
	let obj = {
		correct: null,
		value: null
	};
	if(state.errors && state.errors[ownProps.name] !== undefined){
		obj['correct'] = !state.errors[ownProps.name];
	}

	let key_levels = ownProps.name.split('__');
	let key_levels_length = key_levels.length;

	if(key_levels_length === 1){
		obj['value'] = state[key_levels[0]];
	}else if(key_levels_length === 2) {
		obj['value'] = state[key_levels[0]][key_levels[1]];
	}else if(key_levels_length === 3) {
		obj['value'] = state[key_levels[0]][key_levels[1]][key_levels[2]];
	}

	return obj;
}
