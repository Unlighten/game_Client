import React, { Component } from 'react';
import axios from 'axios';





export default class Leaderboards extends Component {
    constructor(props){
        super(props)

        this.state = {
            leaderboardData: []
        }
        this.getLeaderBoard = this.getLeaderBoard.bind(this)
    }

    // get leaderboard data using axios
    getLeaderBoard(){
        axios.get('http://localhost:7272/leaderboard')
         .then((response) => {
             response.data.data.forEach((item) => {
                 let newItem = {
                     username: item.username,
                     level: item.level
                 }

                 this.state.leaderboardData.push(newItem)
             })
         })
    }

    componentWillMount() {
        this.getLeaderBoard()
    }

    renderTable(data) {
        console.log(data)
        console.log(data[1])
        return (
            <tr><td>{data}</td></tr>
        )
    }
    renderRow(item) {
        return (
            <tr>
                <td>asdfasdf</td>
                <td>{item.level}</td>
            </tr>
        )
    }
    render() {
      return (
        <div>
            <h1 className="Leaderboards-Title">Leaderboards</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
            {this.renderTable(this.state.leaderboardData)}
            </tbody>
            </table>
          </div>
      );
    }
  }