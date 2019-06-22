import React from 'react';
import { updateMaterialQuantity } from '../../actions/actions';
import { fetchMaterials } from '../../actions/packingMaterialsActions';
import { connect } from "react-redux";
import classNames from 'classnames';
import HeaderSection from '../HeaderSection.js';

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
			return materials;
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
			<div className="col-sm-6 col-4">
				<div className="row">
					<div className="col-12">
						{this.props.name}
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<input type="text" value={this.props.quantity} onChange={this.onChange} />
					</div>
				</div>
			</div>
		);
	}
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
