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


export function serializeObject(object, parent_name = '') {
	let query = [];
	for(let name in object){
		if(object.hasOwnProperty(name) && object[name]){
			let value = object[name];
			if(typeof(value) === 'object'){
				let prefix = (parent_name !== '') ? parent_name+"["+name+"]" : name;
				query.push(serializeObject(value, prefix));
			}else{
				value = encodeURIComponent(value);
				let new_name = (parent_name !== '') ? parent_name+"["+name+"]" : name;
				query.push(encodeURIComponent(new_name)+"="+value);
			}
		}
	}
	query = query.join('&');
	return query;
}
