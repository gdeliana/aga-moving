import React, {Suspense} from 'react';
import {connect} from 'react-redux';
import {fetchGallery, cleanGallery} from '../actions/galleryActions';
import { CSSTransition } from 'react-transition-group';
import LazyImage from '../components/LazyImage';

class Gallery extends React.Component {
	state = {
		visible : false
	}
	componentDidMount() {
		this.props.fetchGallery();
		if(!this.props.error && !this.props.loading){
			console.log('starting');
			this.setState({
				visible: true
			})
		}

	}

	componentWillUnmount() {
		this.props.cleanGallery();
	}

	render() {
		if(this.props.error){
			return <div className="error">Error loading images</div>
		}
		if(this.props.loading){
			return <div className="loading">Loading images</div>
		}
		const images = this.props.images.map((image, key) => <GalleryImage {...image} key={key} />);
		return (
			<CSSTransition
				in={this.state.visible}
				classNames="page"
				timeout={500}
			>
			<div className="row page">
				{images}
			</div>

			</CSSTransition>
		);
	}
}

class GalleryImage extends React.Component {
	render = () => (
		<div style={{
			height: "100%"
		}} className="col-12 col-sm-6 col-md-4 col-lg-3" >
		<div style={{
			height: "100%"
		}} className="gallery-image-container">
			<LazyImage style={{
				height: '140px',
				margin: 'auto',
				display: 'block'
			}} withModal src={this.props.url} type="background" />
		</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	images: state.gallery.images,
	loading: state.gallery.loading,
	error: state.gallery.error
});

const mapDispatchToProps = {
	fetchGallery, cleanGallery
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
