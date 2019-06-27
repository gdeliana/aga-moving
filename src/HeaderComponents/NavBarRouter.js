import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";


export default class NavBarRouter extends React.Component {
	render = () => (
		<ul className="list-inline">
			<li className="list-inline-item"><Link to="/">Home</Link></li>
			<li className="list-inline-item"><Link to="/booking/">Book Online</Link></li>
		</ul>
	)
}
