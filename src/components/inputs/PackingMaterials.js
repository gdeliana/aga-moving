import React from 'react';
import { validateinput, updateMaterialQuantity } from '../../actions/actions';
import { fetchMaterials } from '../../actions/packingMaterialsActions';
import { connect } from "react-redux";
import classNames from 'classnames';
import HeaderSection from '../HeaderSection.js';

class PackingMaterials extends React.Component {
	componentDidMount() {
		this.props.fetchMaterials();
	}

	render() {
		if(this.props.show_materials){
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
		materials : state.materials.materials,
		selection : state.main.packing_materials,
		show_materials : state.main.packing_materials_switch
	}
};

const mapDispatchToProps = {
	validateinput,
	fetchMaterials,
	updateMaterialQuantity
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PackingMaterials);
