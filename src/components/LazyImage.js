import React, { Suspense } from 'react';
const Modal = React.lazy(() => import('../components/Modal'));


export default class LazyImage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			src: props.src,
			t: null,
			type : props.type || "img",
			css : props.style || {},
			openedModal: props.openedModal || false,
			title: props.title || "",
			withModal : props.withModal || false
		}

		if(this.state.withModal){
			this.state.css['cursor'] = 'pointer';
		}

	}

	onClick = (feedback) => {
		let opened = feedback || !this.state.openedModal;
		this.setState({
			openedModal: opened
		})
	}

	render = () => {
		let Loading = () => <img className="img-fluid image-img" src="http://www.agamoving.cz/loading.gif" style={this.state.css} alt={this.props.title} />;
		const Mdl = () => {
			if(this.state.withModal && this.state.openedModal){
				return (
					<Modal modalCss={{
						width: '100%'
					}} propagateState={this.onClick} opened title={this.state.title}>
						<Suspense fallback={Loading}>
							<div className="image-background" style={{
								backgroundImage: 'url("'+this.state.src+'")',
								height: '100%'
							}}></div>
						</Suspense>
					</Modal>
				);
			}else{
				return <div></div>
			}
		}
		return (
			<React.Fragment>
				<Mdl />
				<Suspense fallback={Loading}>
				{this.state.type === "img" ? (
					<img onClick={this.onClick} alt={this.props.title} className="img-fluid image-img" src={this.state.src} style={this.state.css} />
				) : this.state.type === 'background' ? (
					<div onClick={this.onClick} data-title={this.props.title} className="image-background" style={{
						...this.state.css,
						backgroundImage: 'url("'+this.state.src+'")'
					}}></div>
				) : <div></div>}
				</Suspense>
			</React.Fragment>
		)
	}
}
