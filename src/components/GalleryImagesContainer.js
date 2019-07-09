import React, {Suspense} from 'react';
import {connect} from 'react-redux';
import {fetchGallery, cleanGallery} from '../actions/galleryActions';
const Modal = React.lazy(() => import('./Modal'));

class GalleryImagesContainer extends React.Component {
	componentDidMount() {
		this.props.fetchGallery();
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
		return <div className="row">{images}</div>
	}
}

class GalleryImage extends React.Component {
	state = {
		image : null,
		openedModal: false,
		timeout: null,
	}

	componentDidMount = () => {
		let t = setTimeout(() => {
			this.setState({
				image : this.props.url
			});
		}, 500);
		this.setState({
			timeout: t
		});
	}

	componentWillUnmount = () => {
		this.setState({t: null});
	}

	openImageModal = (event) => {
		event.stopPropagation();
		let {openedModal} = this.state;
		this.setState({
			openedModal : !openedModal
		});
	}

	modalState = (opened) => {
		this.setState({
			openedModal: opened
		})
	}


	render = () => (
		<div style={{
			height: "100%"
		}} className="col-12 col-sm-6 col-md-4 col-lg-3" >
		<div style={{
			height: "100%"
		}} onClick={this.openImageModal} className="gallery-image-container">
			<img
			src={this.state.image === null ? "http://www.agamoving.cz/loading.gif" : this.state.image}
			style={{
				height: '140px',
				margin: 'auto',
				display: 'block'
			}} className="img-fluid" alt={this.props.name} />
			{this.state.openedModal && (
				<Suspense fallback={<div>Loading ...</div>} >
				<Modal propagateState={this.modalState} opened>
					<img alt={this.props.name} src={this.props.url} className="img-fluid" />
				</Modal>
				</Suspense>
			)}
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

export default connect(mapStateToProps, mapDispatchToProps)(GalleryImagesContainer);
