import React from 'react';
import GalleryWrapper from './GalleryWrapper';
import { Provider } from 'react-redux';
import appStore from '../stores/appStore';
const ContextA = React.createContext();

class GalleryProvider extends React.Component {
	render() {
		return (
			<Provider store={appStore} context={ContextA}>
				<GalleryWrapper />
			</Provider>
		)
	}
}

export default GalleryProvider;
