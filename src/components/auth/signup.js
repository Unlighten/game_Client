import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps){
    this.props.signupUser(formProps);
  }

  renderAlert(){
    if (this.props.errorMessage) {
      return(
        <div className="alert alert-danger">
          <b>Sorry, unable to sign up</b>{this.props.errorMessage}
        </div>
      );
    }
  }
  
  render() {
    const { handleSubmit, fields: {username, password, passwordConfirm}} = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Username:</label>
          <input {...username} className="form-control" />
          {username.touched && username.error && <div className="error">{username.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input {...password} type="password" className="form-control" />
          {password.error}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password</label>
          <input className="form-control" type="password" {...passwordConfirm} />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
          {this.renderAlert()}
          <br />
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

function validate(formProps){
  const errors = {};

  if(!formProps.username) {
    errors.username = "Please enter a valid username address.";
  }
  if(!formProps.password) {
    errors.password = "Please enter a password";
  }
  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = "Please confirm password.";
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = "Confirm Password must match Password.";
  }
  console.log(formProps);
  return errors;
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'passwordConfirm'],
  validate: validate
}, mapStateToProps, actions)(Signup);