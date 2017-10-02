import React, { Component } from 'react';


export default class Leaderboards extends Component {
    render() {
      return (
        <div>
            <h1 className="Leaderboards-Title">Leaderboards</h1>
          <table className='table' >
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Aaron</td>
                    <td>1:10:01</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Vernon</td>
                    <td>2:01:89</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Isaac</td>
                    <td>2:32:76</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>J-Money</td>
                    <td>3:3:76</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Brian</td>
                    <td>5:32:93</td>
                </tr>
            </tbody>
            </table>
          </div>
      );
    }
  }