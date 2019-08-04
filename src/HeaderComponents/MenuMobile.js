import React from 'react';
import classNames from 'classnames';
import { toggleMenuMobile, scrollToTop } from '../actions/appActions';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class MenuMobile extends React.Component {
	onClickHandler = (event) => {
		event.stopPropagation();
		this.props.toggleMenuMobile();
	}

	render = () => (
		<div onClick={(event) => event.stopPropagation()} className={classNames({
			MenuMobile : true,
			open : this.props.open
		})}>
			<div className="MenuItems">
				<ul>
					{this.props.menuItems.map((menuItem, key) => {
						let children = null;
						if(menuItem.children){
							children = menuItem.children.map((child, key1) => (
								<li onClick={this.props.scrollToTop} key={key1}>
									<NavLink exact to={child.link} >{child.name}</NavLink>
								</li>
							));
							children = <ul className="sub-menu">{children}</ul>;
						}
						return (
							<li onClick={this.props.scrollToTop} key={key}>
								<NavLink exact to={menuItem.link} >{menuItem.name}</NavLink>
								{children && (children)}
							</li>
						);
					})}
				</ul>
			</div>

			<div onClick={this.onClickHandler} className="MenuIcon">
				<i className={classNames({
					fas: true,
					'fa-bars' : !this.props.open,
					'fa-times' : this.props.open
				})}></i>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	open : state.app.MenuMobileOpen,
	menuItems : state.app.menuItems
});

const mapDispatchToProps = {
	toggleMenuMobile,
	scrollToTop
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuMobile);
