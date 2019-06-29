import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';


class NavBarRouter extends React.Component {
	render = () => (
		<ul className="list-inline">
			{this.props.menuItems.map((menuItem, key) => {
				let children = menuItem.children ? menuItem.children.map((item, key1) => (
					<li key={key1} className="list-inline-item">
						<Link  to={item.link}>{item.name}</Link>
					</li>
				)) : null;
				return (
					<li key={key} className="list-inline-item">
						<Link  to={menuItem.link}>{menuItem.name}</Link>
						{children}
					</li>
				);
			})}
		</ul>
	)
}

const mapStateToProps = (state) => ({
	menuItems : state.app.menuItems
});

export default connect(mapStateToProps, null)(NavBarRouter);
