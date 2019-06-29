const homeUri = "/new";
const initialState = {
	MenuMobileOpen : false,
	menuItems : [
		{
			name: "Home",
			link : homeUri+"/"
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
	]
};
export default function appReducer (state = initialState, action) {
	console.log(state, action);
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
		default:
			return state;
	}
}
