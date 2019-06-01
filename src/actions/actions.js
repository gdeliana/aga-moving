export const UPDATEFORM = "UPDATEFORM";
export const MAPSAUTOCOMPLETE = "MAPSAUTOCOMPLETE";
// actions serve as interfaces for the reducers (the real actions), just defining the placeholder or mappings
export const updateform = (name, value) => ({
	type: UPDATEFORM,
	name : name,
	value: value,
});

export const autocomplete = (name, value) => ({
	type: MAPSAUTOCOMPLETE,
	name : name,
	value: value,
});
