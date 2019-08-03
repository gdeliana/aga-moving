import {getCookie} from '../customFns/helpers';
const homeUri = "/new";
const initialState = {
	MenuMobileOpen : false,
	homeUri,
	sessID: getCookie('PHPSESSID'),
	breadcrumbNames : {
		[homeUri.replace('/', '')] : "Home",
		"/" : "Home",
		'packing' : "Packing & unpacking",
		'prices' : "Prices",
		'about' : "About us",
		'gallery' : "Gallery",
		'testimonials' : "Testimonials",
		'booking' : "Booking page"
	},
	menuItems : [
		{
			name: "Home",
			link : homeUri
		},
		{
			name : "Packing & unpacking",
			link : homeUri + "/packing"
		},
		{
			name : "Prices",
			link : homeUri + "/prices"
		},
		{
			name : "About us",
			link : homeUri + "/about"
		},
		{
			name : "Gallery",
			link : homeUri + "/gallery"
		},
		{
			name : "Testimonials",
			link : homeUri + "/testimonials"
		}
	],
	'valid' : true,
	'errors' : null,
	'errorMessages' : [],
	'successMessages' : [],
	sending_message : false
};
export default function appReducer (state = initialState, action) {
	switch (action.type) {
		case 'HIDEMENUMOBILE':
			return Object.assign({}, {...state,
				MenuMobileOpen: false
			});
		case 'TOGGLEMENUMOBILE':
			return Object.assign({}, {...state,
				MenuMobileOpen: !state.MenuMobileOpen
			});
		case "UPDATEFORM":
			let obj = {};
			obj[action.name] = action.value;
			return Object.assign({}, state, obj);
		case 'VALIDATEINPUT':
			let errors = state.errors;
			if(errors === null){
				errors = {};
			}
			errors[action.name] = action.error;
			return Object.assign({}, state, {
				errors
			});
		case 'SUBMITCONTACTFORMBEGIN':
			return Object.assign({}, state, {
				valid: true,
				errorMessages : [],
				successMessages : [],
				sending_message: true,
			});
		case 'SUBMITCONTACTFORMERROR':
			return Object.assign({}, state, {
				valid: false,
				errorMessages : action.errors,
				successMessages : [],
				sending_message: false,
			});
		case 'SUBMITCONTACTFORMSUCCESS':
			return Object.assign({}, state, {
				valid: true,
				errorMessages : [],
				successMessages : action.response,
				sending_message : false,
			});
		default:
			return state;
	}
}
