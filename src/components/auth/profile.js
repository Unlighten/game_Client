import React, { Component } from 'react';
import Signin from './signin';


export default class Profile extends Component {
    render() {
      return (
        <div className="Profile">
              <h1 className="UName">Username</h1>
              <p className="ThreeWords">Adjective 1 - Adjective 2 - Adjective 3</p>
              <image className="profImage" src="http://images5.fanpop.com/image/photos/31200000/Adventure-Time-adventure-time-with-finn-and-jake-31251863-500-324.jpg"></image>
              <div className="coinsCollected">Coins collected</div>
        </div>
      );
    }
  }