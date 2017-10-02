import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createUser } from '../../actions/index';
import { Link } from 'react-router';

class profile_createProf extends Component {
	handleFormSubmit(formProps) {
		//call action creator to sign up the user
		this.props.createUser(formProps);
	}
	render() {
		const {fields: {username}, handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Create a New User</h3>

				<fieldset className="form-group">
					<label>This should show your username instead of having you enter it</label>
					<input type="text" className="form-control" {...username} />
				</fieldset>

				{/* <button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/profile" className="btn btn-danger">Cancel</Link> */}
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['username']
}, mapStateToProps, {createUser})(profile_createProf);