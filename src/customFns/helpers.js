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
