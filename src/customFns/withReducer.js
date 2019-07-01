import React from 'react';
import { object } from "prop-types";
import { connect } from 'react-redux';

export const withReducer = (key, reducer) => {
	return (Element) => {
		Element = connect(null, null)(Element);
		const Extended = (props, context) => {
			console.log(props);
			context.store.injectReducer(key, reducer);
			return <Element {...props} />
		};

		Extended.contextTypes = {
	    	store: object
	  	};

		return Extended;
	}
}
