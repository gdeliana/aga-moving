const homeUri = "/new";
const initialState = {
	MenuMobileOpen : false,
	homeUri,
	breadcrumbNames : {
		[homeUri.replace('/', '')] : "Home",
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
	'successMessages' : []
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
				successMessages : []
			});
		default:
			return state;
	}
}
