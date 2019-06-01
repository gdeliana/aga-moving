import React, { Component } from 'react';

class HeaderSection extends Component {
	render () {
		const Tag = "h"+this.props.size;
		return (
			<div className="HeaderSection row">
				<div className="col-12">
					<Tag style={{
						textAlign: "center",
						marginBottom : "20px",
						marginTop: "20px"
					}}>
						{this.props.title}
					</Tag>
				</div>
			</div>
		);
	}
}

export default HeaderSection;
