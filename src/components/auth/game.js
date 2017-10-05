import React, { Component } from 'react';

import Clock from '../timer/Timer';

export default class Game extends Component {
    render() {
      return (
      	<div>
      	<Clock />
        <div id="game"></div>
      	</div>
      );
    }
  }