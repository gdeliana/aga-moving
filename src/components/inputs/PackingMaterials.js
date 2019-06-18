import React from 'react';
import { validateinput } from '../../actions/actions';
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
			const materials = this.props.materials.map((material, key) => (
				<PackingMaterial {...material} key={key} />
			));
			return materials;
		}
		return <div />;
	}
}

class PackingMaterial extends React.Component {
	state = {
		quantity : 0
	}

	onChange = (e) => {
		this.setState({
			quantity: e.target.value
		})
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
						<input type="text" value={this.state.quantity} onChange={this.onChange} />
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
	fetchMaterials
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PackingMaterials);
