import React from 'react';
import NavBarRouter from './HeaderComponents/NavBarRouter';

export default class Header extends React.Component {
	render () {
		return (
			<div className="row" id="header">
				<div className="col-4 col-sm-5">
					<div id="logo">
						<img alt="AGA Moving" src="http://agamoving.cz/img/logo.png" className="img-fluid" style={{
							maxWidth : "170px"
						}} />
					</div>
				</div>

				<div className="col-8 col-sm-7">
					<div className="row">

					</div>
					<div className="row navBar">
						<NavBarRouter />
					</div>
				</div>
			</div>
		)
	}
}
