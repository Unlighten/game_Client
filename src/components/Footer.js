import React, {Component} from 'react';
import {footer, Well} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

	class NavBarFooter extends Component {

		render() {
			return (
				<footer className="actual-footer" bsSize="large"></footer>
			);
		}
	}

	export default NavBarFooter;