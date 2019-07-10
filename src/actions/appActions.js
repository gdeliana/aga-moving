import {lazy} from 'react'
export const HIDEMENUMOBILE = 'HIDEMENUMOBILE';
export const TOGGLEMENUMOBILE = 'TOGGLEMENUMOBILE';
export const SUBMITCONTACTFORMBEGIN = "SUBMITCONTACTFORMBEGIN";
export const SUBMITCONTACTFORMSUCCESS = "SUBMITCONTACTFORMSUCCESS";
export const SUBMITCONTACTFORMERROR = "SUBMITCONTACTFORMERROR";

export const hideMenuMobile = () => ({
	type: HIDEMENUMOBILE
});

export const toggleMenuMobile = () => ({
	type: TOGGLEMENUMOBILE
});

export const submitContactFormBegin = () => ({
	type: SUBMITCONTACTFORMBEGIN
});
export const submitContactFormSuccess = (response) => ({
	type: SUBMITCONTACTFORMSUCCESS,
	response
});
export const submitContactFormError = (errors) => ({
	type: SUBMITCONTACTFORMERROR,
	errors
});

export const submitform = () => {
	return (dispatch, getState) => {
		let currenState = getState();
		let {errors, contact_name, contact_email, contact_message, captcha} = currenState.app;
		let isValidForm = true;
		let errorMessages = [];
		let successMessages = [];
		for (let fieldName in errors){
			let invalidField = errors[fieldName];
			if(invalidField){
				isValidForm = false;
				errorMessages.push('Please fill in: '+fieldName);
			}
		}
		if(isValidForm){
			import('axios').then((axios) => {
				let data = {
					contact_name,
					contact_email,
					contact_message,
					captcha
				};
				let query = [];
				for(let name in data){
					if(data.hasOwnProperty(name)){
						let value = encodeURIComponent(data[name]);
						query.push(encodeURIComponent(name)+"="+value);
					}
				}
				query = query.join('&');
				axios.request({
				  method: 'post',
				  url: 'http://www.agamoving.cz/api_aga/contact_form.php',
				  data: query,
				  responseType: 'text'
				});
			});

		}else{
			dispatch(submitContactFormError(errorMessages));
		}
	}
}
