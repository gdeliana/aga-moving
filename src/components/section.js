import React, { Component } from 'react';

class HeaderSection extends Component {
	render () {
		return (
			<div className="HeaderSection">
				<h3>
					{this.props.title}
				</h3>
			</div>
		);
	}
}

export default HeaderSection;
