import React, { Component } from 'react';
import Signin from './signin';


export default class Profile extends Component {
    render() {
      return (
        <div className="Profile">
              <h1 className="UName">Username</h1>
              <p className="ThreeWords">Adjective 1 - Adjective 2 - Adjective 3</p>
              <image className="profImage" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"></image>
              <div className="coinsCollected">Coins collected</div>
        </div>
      );
    }
  }