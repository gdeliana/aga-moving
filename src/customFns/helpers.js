export const withReducer = (store, reducerPaths, elementPath) => {
	for(let name in reducerPaths){
		let reducerPath = reducerPaths[name];
		import("../"+reducerPath).then((reducer) => {
			if(store.injectReducer)
				store.injectReducer(name, reducer.default);
		})
	}
	return import("../"+elementPath);
}

export function getCookie(name) {
	let cookies = document.cookie.split(';');
	let pairs = {};
	for (let i in cookies){
		let cookie = cookies[i]
		let pair = cookie.split('=');
		pairs[pair[0]] = pair[1] ? pair[1] : "";
	}
	if(pairs[name]){
		return pairs[name];
	}
	return false;
}

export function generateId() {
	return '_' + Math.random().toString(36).substr(2, 9);
}
