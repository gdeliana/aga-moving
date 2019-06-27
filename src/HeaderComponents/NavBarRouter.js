import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class NavBarRouter extends React.Component {
	render = () => (
		<ul className="list-inline">
			<li className="list-inline-item"><Link to="/new/">Home</Link></li>
			<li className="list-inline-item"><Link to="/new/booking/">Book Online</Link></li>
		</ul>
	)
}
