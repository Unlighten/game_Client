import React, { Component } from 'react';
import Signin from './signin';



export default class Profile extends Component {
    render() {
      return (
        <div className="Profile">
              <h1 className="Name">Username</h1>
              <p className="Bio">Adjective 1 - Adjective 2 - Adjective 3</p>
              <div className="Quote">Something at the bottom</div>
              <image src="https://goo.gl/Q4zT4r"></image>
              <div className="coinsCollected">Coins collected</div>
        </div>
      );
    }
  }