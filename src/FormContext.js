import React from 'react';

const FormContext = React.createContext({
	'name' : '',
	'phone' : '',
	'email' : '',
	'date' : '',
	'from' : {
		'city' : '',
		'country' : '',
		'street' : '',
		'size' : '',
		'floor' : '',
		'lift' : ''
	},
	'to' : {
		'street' : '',
		'city' : '',
		'country' : '',
		'floor' : '',
		'lift' : ''
	},
	'vehicle' : '',
	'packing_service' : 0,
	'heavy_products' : 0,
	'appointment' : 0,
	'packing_materials' : [],
	'comment' : '',
	'files' : ''
});

export default FormContext;
