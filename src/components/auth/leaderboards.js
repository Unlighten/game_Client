import React, { Component } from 'react';


export default class Leaderboards extends Component {
    render() {
      return (
        <div>
          <table className='table' >
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Aaron</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Vernon</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Isaac</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>J-Money</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Brian</td>
                </tr>
            </tbody>
            </table>
          </div>
      );
    }
  }