import React, { Component } from 'react';

export default class GameOver extends Component {S
    componentWillMount(){
        if(!window.location.hash) {
            window.location = window.location + '#gameover';
            window.location.reload();
        }
    }
    render() {
      return (
            <image className="Goodbye" src="https://i.pinimg.com/originals/ff/8d/09/ff8d0940719aee05e0cc22ea890e8b01.jpg"></image>
      );
    }
  }