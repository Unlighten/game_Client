import React, {Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem, CollapsibleNav} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

	class NavBarHeader extends Component {
		renderLinks(){
			if(this.props.authenticated) {
				return <NavItem key={1} href="/signout">Sign Out</NavItem>
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
							<a href="/homepage">Game</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav pullRight>
					{this.renderLinks()}
						<NavItem eventKey={3} href="/game">Game</NavItem>
						<NavItem eventKey={4} href="/leaderboards">Leaderboards</NavItem>
						<NavItem eventKey={5} href="/profile">Your Profile</NavItem>
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