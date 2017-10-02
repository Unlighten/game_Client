import React, {Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem, CollapsibleNav} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

	class NavBarHeader extends Component {
		renderLinks(){
			//Another thing that may be broken... sort of.. 
			// if(this.props.authenticated) {
				if(window.localStorage.getItem('token')){
				return [
					<NavItem key={1} href="/signout">Sign Out</NavItem>,
					<NavItem eventKey={2} href="/game">Play CMDR</NavItem>,
					<NavItem eventKey={3} href="/leaderboards">Leaderboards</NavItem>,
					<NavItem eventKey={4} href="/profile">Your Profile</NavItem>
				]
			} else {
				return [
					<NavItem key={1} href="/signin">Sign In</NavItem>,
		      <NavItem key={2} href="/signup">Sign Up</NavItem>
				];
			}
		}
		render() {
			return (
				<Navbar inverse fluid>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/homepage">CMDR</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav pullRight>
					{this.renderLinks()}
					</Nav>

				</Navbar>
			);
		}
	}

	function mapStateToProps(state){
		return {
			authenticated: state.auth.authenticated
		}
	}

	export default NavBarHeader;