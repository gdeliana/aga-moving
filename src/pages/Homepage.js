import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

class Homepage extends React.Component {
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
		<div className="row">
			<div className="col-12" style={{
				marginBottom: '15px'
			}}>
				<p id="welcome"><b>Welcome to AGA-moving.cz</b>. Within these pages you can find out more about the company, read the testimonials from a small fraction of our satisfied customers, request a quote or contact us directly to discuss your moving and relocating requirements. </p>
			</div>
		</div>
		<div className="row">
			<div className="col-12 col-lg-4 homepage-column">
				<div className="row" style={{
					marginBottom: '15px'
				}}>
					<div className="col-12">
						<img src="http://agamoving.cz/images/_DSC8516.JPG" alt="Agamoving" className="img-fluid" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<h4><Link to={this.props.homeUri+"booking"}>Local & International Moves</Link></h4>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<p>Whatever the requirements you can be sure that every customer receives the highest possible service levels from our courteous team of professionals.</p>

						<p>Many of our customers have used our services multiple times because we offer excellent prices combined with a polite and friendly work ethic.</p>

						<p>We arrive on time, charge only for the hours we work and stay until the job is completed to your satisfaction. You needn't lift a single box, but if you want to help out, you can.</p>
					</div>
				</div>
			</div>
			<div className="col-12 col-lg-4 homepage-column">

				<div className="row" style={{
					marginBottom: '15px'
				}}>
					<div className="col-12">
						<img src="http://agamoving.cz/img/moving_box.jpg" className="img-fluid" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<h4><Link to={this.props.homeUri+"packing"}>Moving Boxes & Packaging Supplies</Link></h4>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<p>Do you need moving boxes and packing supplies? We can provide all the necessary boxes, tape and other packing material you will need for your move.</p>

						<p>For your hanging clothes and suits we have specialized wardrobe boxes made specifically for this purpose. We also provide other moving boxes of various sizes.</p>

						<p>There is a zero delivery charge on all orders above 2500 czk.</p>
					</div>
				</div>
			</div>
			<div className="col-12 col-lg-4 homepage-column">

				<div className="row" style={{
					marginBottom: '15px'
				}}>
					<div className="col-12">
						<img src="http://agamoving.cz/images/foto7.jpg" alt="Moving boxes" className="img-fluid" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<h4><Link to={this.props.homeUri+"booking"}>Moving Boxes & Packaging Supplies</Link></h4>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<p>It is sometimes difficult for clients to synchronize leaving one home and moving into a new one. Or maybe you are moving abroad and don't want to take your furniture, or simply just clearing out that spare room.</p>

						<p>There is an easy and cost effective solution - we offer safe and secure storage here at our Prague location. Our warehouse is adjacent to our offices and is alarmed and secure at all times.</p>
					</div>
				</div>
			</div>
		</div>
		</div>
		</div>
		</CSSTransition>
	)
}

const mapStateToProps = (state) => ({
	homeUri : state.app.homeUri
});

export default connect(mapStateToProps, null)(Homepage);
