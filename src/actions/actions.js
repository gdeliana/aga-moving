export const UPDATEFORM = "UPDATEFORM";
export const VALIDATEINPUT = "VALIDATEINPUT";
export const UPDATEVEHICLEWORKER = "UPDATEVEHICLEWORKER";
export const SUBMITFORM = "SUBMITFORM";
export const UPDATEMATERIALQUANTITY = "UPDATEMATERIALQUANTITY";
// actions serve as interfaces for the reducers (the real actions), just defining the placeholder or mappings
export const updateform = (name, value) => ({
	type: UPDATEFORM,
	name : name,
	value: value,
});

export const updatevehicleworker = (vehicle, workers) => {
	return {
		type: UPDATEVEHICLEWORKER,
		vehicle, workers
	}
}

export const submitform = () => {
	return {
		type: SUBMITFORM
	}
}

export const validateinput = (inputName, validationResult) => ({
	type: VALIDATEINPUT,
	error : !validationResult,
	name: inputName,
});

export const updateMaterialQuantity = (idMaterial, quantity) => ({
	type: UPDATEMATERIALQUANTITY,
	id: idMaterial,
	quantity
});
