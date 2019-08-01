import React from 'react';
import { connect } from 'react-redux';
import LazyImage from '../components/LazyImage';

class Packing extends React.Component {
	render = () => (
		<React.Fragment>
		<div className="row">
			<div className="col-12">
				<h4><strong>Packing & Unpacking services</strong></h4>
			</div>
		</div>
		<br />
		<div className="row">
			<div className="col-12">
				<ul>
					<li><strong>Full Packing</strong> - If you'd rather not worry about packing at all. We  will send a team of experienced movers and packers to your home to pack up the  attic to the basement. Of course, we will leave out any items you'll need on  the night before moving, and quickly pack those up on move day. </li>
					<li><strong>Partial Packing</strong> - If you don't mind packing some - or even most! - of  your items on your own, but would like some additional help, we can accommodate  that too. Perhaps you'd just like us to tackle a large collection of breakables  or just work on preparing storage areas for the move - we're happy to. </li>
					<li><strong>Assembling  and disassembling </strong>- We can help you as well in  assembling and dissasembling your furniture which in some cases can be  difficult to move also.</li>
			  	</ul>
			</div>
		</div>
		<div className="row">
			<div className="col-12 col-sm-7 col-md-8">
			<h4><strong>Packing Tips</strong></h4>
<ul>
<li>Keep the following supplies and accessories on hand:<ul>
	<li>Boxes, all sizes</li>
	<li>Bubble wrap or other cushioning material</li>
	<li>Marking pens</li>
	<li>Tape measure</li>
	<li>Furniture pads or old blankets</li>
	<li>Packing tape and scissors</li>
	<li>Money and credit cards</li>
	</ul>
</li>
<li>Label each box with the room in the new home to which it should be delivered.</li>
<li>Number the boxes and keep a list of what is in each box.</li>
<li>Clearly mark fragile items.</li>
<li>Pack a bag of personal items you'll need during the move (change of clothes, toiletries, medicine, maps, food, and drinks). Keep it in an easy-to-find place when you pack.</li>
<li>Keep a medical kit accessible.</li>
<li>If you have children, pack a bag of games and activities for the trip.</li>
</ul>

			</div>
			<div className="col-12 col-sm-5 col-md-4">
				<LazyImage src="http://agamoving.cz/images/services.jpg" withModal />
			</div>
		</div>
		<div className="row">
			<div className="col-12">
			<p>In order to make your moving experience easier and help you during the packing process we provide the following packing materials, which you can order online.</p>

			<p>The packing and unpacking service is also provided by our workers. The packing materials must be provided by the customer or they can be bought from us.</p>
			</div>
		</div>
		</React.Fragment>
	)
}

const mapStateToProps = (state) => ({
	homeUri : state.app.homeUri
});

export default connect(mapStateToProps, null)(Packing);
