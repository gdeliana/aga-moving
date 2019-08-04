export const HIDEMENUMOBILE = 'HIDEMENUMOBILE';
export const TOGGLEMENUMOBILE = 'TOGGLEMENUMOBILE';
export const SUBMITCONTACTFORMBEGIN = "SUBMITCONTACTFORMBEGIN";
export const SUBMITCONTACTFORMSUCCESS = "SUBMITCONTACTFORMSUCCESS";
export const SUBMITCONTACTFORMERROR = "SUBMITCONTACTFORMERROR";
export const SCROLLTOTOP = "SCROLLTOTOP";

export const hideMenuMobile = () => ({
	type: HIDEMENUMOBILE
});

export const scrollToTop = () => ({
	type: SCROLLTOTOP
})

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
		let {errors, contact_name, contact_email, contact_message, captcha, sessID} = currenState.app;
		let isValidForm = true;
		let errorMessages = [];
		for (let fieldName in errors){
			let invalidField = errors[fieldName];
			if(invalidField){
				isValidForm = false;
				errorMessages.push('Please fill in: '+fieldName);
			}
		}
		if(isValidForm){
			import('axios').then((axios) => {
				dispatch(submitContactFormBegin());
				let data = {
					contact_name,
					contact_email,
					contact_message,
					captcha,
					sessID
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
				  responseType: 'json'
			  	}).then(res => {
					if(res.data && res.data.errors && res.data.errors.length > 0){
					  dispatch(submitContactFormError(res.data.errors));
				  	}else if(res.data && res.data.success && res.data.success.length > 0){
					  dispatch(submitContactFormSuccess(res.data.success));
				  }else{
					  dispatch(submitContactFormError(["There was a problem sending the message."]));
				  }

				}).catch(err => {
				  if(err.statusText){
					  dispatch(submitContactFormError([err.statusText]));
				  }
				});
			});

		}else{
			dispatch(submitContactFormError(errorMessages));
		}
	}
}
