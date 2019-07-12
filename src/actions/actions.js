import axios from 'axios';
import {serializeObject} from '../customFns/formFns';
export const UPDATEFORM = "UPDATEFORM";
export const VALIDATEINPUT = "VALIDATEINPUT";
export const UPDATEVEHICLEWORKER = "UPDATEVEHICLEWORKER";
export const SUBMITFORMBEGIN = 'SUBMITFORMBEGIN';
export const SUBMITFORMSUCCESS = 'SUBMITFORMSUCCESS';
export const SUBMITFORMERROR = 'SUBMITFORMERROR';
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

export const submitformbegin = () => {
	return {
		type: SUBMITFORMBEGIN
	}
}

export const submitformerror = (err) => {
	return {
		type: SUBMITFORMERROR,
		error: err
	}
}
export const submitformsuccess = (payload) => {
	return {
		type: SUBMITFORMSUCCESS,
		success: payload
	}
}

export const submitform = () => {
	return (dispatch, getState) => {
		dispatch(submitformbegin());
		let form = new FormData(document.getElementById('booking-form'));
		console.log(form);
		axios.request({
			method: 'post',
			url: 'http://agamoving.cz/api_aga/order_moving.php',
			data: form,
			responseType: 'text'
		}).then((res) => {
			if(res.data && res.data.success && res.data.success.length > 0){
				dispatch(submitformsuccess(res.data.success));
			}else if(res.data && res.data.errors && res.data.errors.length > 0){
				dispatch(submitformerror(res.data.errors));
			}else{
				dispatch(submitformerror(['Form could not be submitted.']));
			}
		}).catch((err) => {
			dispatch(submitformerror(['Form could not be submitted.']));
		});
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
