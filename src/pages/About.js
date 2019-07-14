import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

class About extends React.Component {
	state = {
		visible : false
	}
	componentDidMount(){
		this.setState({
			visible: true
		})
	}
	render = () => (
		<CSSTransition
			in={this.state.visible}
			classNames="page"
			timeout={500}
		>
		<div className="row page">
		<div className="col-12">
			<div style={{
			 background: "url('http://agamoving.cz/img/old_town.jpg')",
			 backgroundColor: 'grey',
			 backgroundRepeat: 'no-repeat',
			 backgroundSize: 'cover',
			 backgroundPosition: 'center',
			 width: 'calc(100% - 8px)',
			 height: '200px',
			 margin: '10px auto',
			 padding: '5px',
			}}></div>
			<p>AGA Moving is a  family run business based in Prague in the Czech Republic is located in the heart of Europe and is well positioned to serve the whole of Europe and beyond. </p>
			<p>Set up in 2005 with the aim of offering a different kind of moving and relocation service.</p>
			<p>In the past you might have expected a moving company to turn up somewhere near the time you specified, complete the job roughly like you asked with staff that seemed to understand your needs, but you couldn't be sure.</p>
			<p>In the end the job was done, you couldn't really complain given the price but you wish certain aspects had been different.</p>
			<p>At AGA Moving all of our staff are well educated, speak multiple languages and conduct their jobs in a logical and efficient manner. </p>
			  <p>If you instruct us to do something we might offer alternative or more cost effective solutions to you based on your circumstances and our past experiences rather than follow instructions like mindless robots. </p>
			  <p>If you have only a small load, we can combine it with others to reduce the cost to you. It may even be possible for you to travel with your items to the destination. </p>
			  <p>"After using AGA Moving services you'll never want to use another moving company."</p>
			</div>
		</div>
		</CSSTransition>
	)
}

const mapStateToProps = (state) => ({
	homeUri : state.app.homeUri
});

export default connect(mapStateToProps, null)(About);
