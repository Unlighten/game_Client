import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({username, password}) {
		console.log(username, password);
		this.props.signinUser({username, password});
	}

	renderAlert() {
		if(this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<b>Something exploded!</b> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: {username,password}}=this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Username:</label>
					<input {...username} className="form-control" />
				</fieldset>
				<fieldset>
					<label>Password:</label>
					<input {...password} type="password" className="form-control" />
				</fieldset>
					{this.renderAlert()}
				<br/>
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {errorMessage: state.auth.error};
}

export default reduxForm({
	form: 'signin',
	fields: ['username', 'password']
}, mapStateToProps, actions)(Signin);