import React from 'react';

const FormContext = React.createContext();

FormContext.defaultState = {
	'name' : 'Genci',
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
	'packing_service' : false,
	'heavy_products' : false,
	'appointment' : false,
	'packing_materials' : [],
	'comment' : '',
	'files' : ''
}

export default FormContext;
