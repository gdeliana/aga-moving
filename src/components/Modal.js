import React from 'react';

export default class Modal extends React.Component {
	constructor (props) {
		super(props);
		let opened = props.opened || false;
		this.state = {
			opened
		}
	}

	componentWillMount() {
		if(this.state.opened)
	    	document.body.style.overflow = "hidden";
	}

	componentWillUnmount() {
	    document.body.style.overflow = "visible"; // or restore the original value
	}

	toggle = (event) => {
		event.stopPropagation();
		let currentState = this.state.opened;
		this.setState({
			opened : !currentState
		});

		if(this.props.propagateState){
			this.props.propagateState(!currentState);
		}
	}

	render = () => {
		let mainStyle = {
			display: ((this.state.opened) ? "flex" : "none")
		}
		return (
			<div className="modal-wrapper" style={mainStyle}>
				<div className="custom-modal">
					<div onClick={this.toggle} className="close">
						<span>X</span>
					</div>
					{this.props.title && (
						<div className="modal-header">
							<h4>{this.props.title}</h4>
						</div>
					)}
					{this.props.children && (
						<div className="modal-body">
							{this.props.children}
						</div>
					)}
				</div>
			</div>
		);
	}
}
