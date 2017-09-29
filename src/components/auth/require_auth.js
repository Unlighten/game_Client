import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    // nextProps.authenticated please help****************************************
    componentWillMount() {
      if (!window.localStorage.getItem('token')) {
        this.context.router.push('/');
      }
    }

    // nextProps.authenticated please help****************************************
    componentWillUpdate(nextProps) {
      if (!window.localStorage.getItem('token')) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}