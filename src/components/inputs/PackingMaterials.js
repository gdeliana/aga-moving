import React from 'react';
import { updateMaterialQuantity } from '../../actions/actions';
import { fetchMaterials } from '../../actions/packingMaterialsActions';
import { connect } from "react-redux";
import HeaderSection from '../HeaderSection.js';
import {Modal} from '../Modal';

class PackingMaterials extends React.Component {
	componentDidMount() {
		this.props.fetchMaterials();
	}

	render() {
		if(this.props.loading) {
			return <div className="loading">Loading materials</div>
		}else if(this.props.error){
			return <div className="error">Error loading materials</div>
		}else if(this.props.show_materials){
			const materials = this.props.materials.map((material, key) => {
				const quantity = (this.props.selection[material.id]) ? this.props.selection[material.id] : 0;
				return <PackingMaterial onChange={this.props.updateMaterialQuantity} {...material} key={key} quantity={quantity} />
			});
			return (
				<div className="row">
					<div className="col-12">
						<HeaderSection title="Please select the needed packing materials" size="4" />
						<hr />
					</div>
					{materials}
				</div>
			);
		}
		return <div />;
	}
}

class PackingMaterial extends React.Component {
	onChange = (e) => {
		this.props.onChange(this.props.id, e.target.value);
	}

	render () {
		return (
			<div className="col-sm-6 col-md-4 col-6 packing_material">
				<div className="wrapper">
					<div className="row">
						<PackingMaterialImage name={this.props.name} image={this.props.image} />
					</div>
					<div className="row">
						<div className="col-12">
							{this.props.name}
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							{this.props.price} czk/{this.props.unit}
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							{this.props.description !== '' ? this.props.description : "no description"}
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<input type="text" value={this.props.quantity} onChange={this.onChange} />
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							Price: {this.props.quantity * this.props.price} czk
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class PackingMaterialImage extends React.Component {
	state = {
		image : null,
		openedModal : false
	}
	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				image : this.props.image
			});
		}, 500);
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
			position: "relative",
			"margin" : "auto"
		}}>
			<img alt={this.props.name} src={this.state.image === null ? "http://www.agamoving.cz/loading.gif" : this.state.image} className="img-fluid" />
			{this.state.openedModal && (
				<Modal propagateState={this.modalState} opened>
					<img alt={this.props.name} src={this.props.image} className="img-fluid" />
				</Modal>
			)}
			<span onClick={this.openImageModal} className="zoom-image">Zoom+</span>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		materials : state.materials.payload,
		selection : state.main.packing_materials,
		show_materials : state.main.packing_materials_switch,
		loading: state.materials.loading,
		error: state.materials.error
	}
};

const mapDispatchToProps = {
	fetchMaterials,
	updateMaterialQuantity
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PackingMaterials);
