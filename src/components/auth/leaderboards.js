import React, { Component } from 'react';
// import { ListGroupItem, ListGroup, Button  } from 'react-bootstrap';
import axios from 'axios';
import ROOT_URL from '../../actions/index';


export default class Leaderboards extends Component {
    constructor(props){
        super(props)

        this.state = {
            leaderboardData: {}
        }
        this.getLeaderBoard = this.getLeaderBoard.bind(this)
    }

    // get leaderboard data using axios
    getLeaderBoard(){
        axios.get(`${ROOT_URL}/leaderboard`, {username, level})
        // axios.get('https://localhost:8080/')
         .then((response) => {
            //  console.log(response.data.data)
             this.setState({
                 leaderboardData: response.data.data
             })
         })
    }

    componentWillMount() {
        this.getLeaderBoard()
    }

    renderItems() {
        console.log(this.state)
        let rank = 0
        if (Object.keys(this.state.leaderboardData).length !== 0) {
            return this.state.leaderboardData.map((item) => {
                rank++
                return (
                    <tr>
                        <td>{rank}</td>
                        <td>{item.username}</td>
                        <td>{item.level}</td>
                    </tr>
                );
            });
        }
        else {return ""}
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
                {this.renderItems()}
            </tbody>
            </table>
          </div>
      );
    }
  }