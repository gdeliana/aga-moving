import React from 'react';
import Gallery from './Gallery';
import { withReducer } from '../customFns/withReducer';
import galleryReducer from '../reducers/galleryReducer';


export default class GallerWrapper extends React.Component {
	render() {
		return withReducer('gallery', galleryReducer)(Gallery)();
	}
}
