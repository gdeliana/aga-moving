import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux';


class NavBarRouter extends React.Component {
	render = () => (
		<ul className="list-inline navBar">
			{this.props.menuItems.map((menuItem, key) => {
				let children = menuItem.children ? menuItem.children.map((item, key1) => (
					<li key={key1} className="list-item">
						<NavLink exact to={item.link}>{item.name}</NavLink>
					</li>
				)) : null;
				children = children !== null ? <ul className="sub-menu">{children}</ul> : children;
				return (
					<li key={key} className="list-inline-item">
						<NavLink exact to={menuItem.link}>
							{menuItem.name}
							<div className="triangle"></div>
						</NavLink>
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
