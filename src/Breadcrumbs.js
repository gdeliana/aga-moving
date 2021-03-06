import React from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

class Breadcrumbs extends React.Component {

	render() {
		const Breadcrumb = ({ match, ...rest }) => {
			let uriName = match.url.replace(/^\/|\/$|new\//g,'');
			uriName = (uriName === '') ? 'home' : uriName;
			console.log(uriName);
			const name = this.props.breadcrumbNames[uriName] || false;

			if(name){
				return (
					<React.Fragment>
				      <Link to={match.url || ''} className={match.isExact ? 'breadcrumb active' : 'breadcrumb'}>
				          {name}
				      </Link>
				      <Route path={`${match.url}/:path`} component={Breadcrumb} />
				  	</React.Fragment>
				)
			}else{
				return <div />;
			}

		}

		return (
			<div className="breadcrumbs row">
				<div className="col-12">
					<Route path="/:path" component={Breadcrumb} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	breadcrumbNames : state.app.breadcrumbNames,
	homeUri : state.app.homeUri
});

export default connect(mapStateToProps, null)(Breadcrumbs);
