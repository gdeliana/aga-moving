import React from 'react';
import {connect} from 'react-redux';
import {fetchGallery} from '../actions/galleryActions';

class Gallery extends React.Component {
	componentDidMount() {
		this.props.fetchGallery();
	}
	render() {
		console.log(this.props.images);
		return <div/>
	}
}

const mapDispatchToProps = {
	fetchGallery
}

const mapStateToProps = (state) => ({
	images: state.gallery.images
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
