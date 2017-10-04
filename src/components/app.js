import React, { Component } from 'react';
import NavBarHeader from './Nav';
import NavBarFooter from './Footer';
import Signin from './auth/signin';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBarHeader />
        <NavBarFooter />
        {this.props.children}
      </div>
    );
  }
}