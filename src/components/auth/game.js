import React, { Component } from 'react';

import Clock from '../timer/Timer';

export default class Game extends Component {
    render() {
      return (
      	<div>
      	<Timer />
        <div id="game"></div>
      	</div>
      );
    }
  }