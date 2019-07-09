import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

class Breadcrumbs extends React.Component {

	render() {
		const Breadcrumb = ({ match, ...rest }) => {
			const uriName = match.url.substr(match.url.lastIndexOf('/')+1, match.url.length);
			const name = this.props.breadcrumbNames[uriName] || uriName || match.url;
			return (
				<React.Fragment>
			      <Link to={match.url || ''} className={match.isExact ? 'breadcrumb active' : 'breadcrumb'}>
			          {name}
			      </Link>
			      <Route path={`${match.url}/:path`} component={Breadcrumb} />
			  	</React.Fragment>
				)
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
	breadcrumbNames : state.app.breadcrumbNames
});

export default connect(mapStateToProps, null)(Breadcrumbs);
