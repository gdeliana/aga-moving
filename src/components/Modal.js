import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default class Modal extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			opened : props.opened || false,
			modalCss: props.modalCss || {}
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
		return (
			<CSSTransition in={this.state.opened} timeout={1000} classNames="modal-anim" appear>
			<div className="modal-wrapper" style={{
				display: 'flex'
			}}>
				<div className="custom-modal" style={this.state.modalCss}>
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
			</CSSTransition>
		);
	}
}
