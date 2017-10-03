import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
	componentWillMount() {
		this.props.signoutUser();
		if(!window.location.hash) {
            window.location = window.location + '#bye';
            window.location.reload();
		}
	}
	render() {
		return (
			<image className="Goodbye" src="https://memegenerator.net/img/instances/500x/80458590/hope-to-see-you-soon.jpg"></image>
		)
	}
}

export default connect(null, actions)(Signout);