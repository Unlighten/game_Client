import React from 'react';
import {browserHistory} from 'react-router';

var Clock = React.createClass({

  getInitialState: function() {
    return { currentCount: 300 };
  },

  componentDidMount: function() {
    var intervalId = setInterval(this.timer, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
 },
 
 componentWillUnmount: function() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
 },
 
 timer: function() {
  var newCount = this.state.currentCount - 1;
  if(newCount >= 0) { 
      this.setState({ currentCount: newCount });
  } else {
      clearInterval(this.state.intervalId);
      window.localStorage.setItem('gameOver', false)
      browserHistory.push('/gameover');
  }
},
 
 render: function() {
     // You do not need to decrease the value here
     return (
      <div className="container">
        <div className="gametimer">Time Remaining: {this.state.currentCount}</div>
      </div>
     );
 }

});

module.exports = Clock;