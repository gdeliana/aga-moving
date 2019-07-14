import React from 'react';
import {Provider} from 'react-redux';
import galleryStore from '../stores/galleryStore';
import GalleryImagesContainer from '../components/GalleryImagesContainer';


export default class Gallery extends React.Component {
	render() {
		return (
			<Provider store={galleryStore}>
				<GalleryImagesContainer />
			</Provider>
		)
	}
}
