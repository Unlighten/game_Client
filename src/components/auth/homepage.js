import React, { Component } from 'react';
import Signin from './signin';
import {Grid, Row, Col} from 'react-bootstrap';
// import { fadeIn } from 'react-animations';


export default class Homepage extends Component {
    render() {
      return (
        <Grid>
          <Row className="show-grid">
            <h1 className="RU-Title">Recent Updates</h1>
          </Row>
          <Row className="show-grid">
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Patch 1.03</h3>More information coming soon!</Col>
            <Col sm={6} md={1}></Col>
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Patch 1.02</h3>More information coming soon!</Col>
            <Col sm={6} md={1}></Col>
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Patch 1.01</h3>Today I fixed the leaderboard feature! You should be able to see what level you have reached on the leaderboards! In the coming weeks I will be focusing on fixing Your Profile and also adding in the username to the Leaderboards. Have a great week everyone! 10-5-17</Col>
            <Col sm={6} md={1}></Col>
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Launch Day</h3>We officially launched today on 10-4-17! Welcome to the first version of CMDR! There are minor bugs that we are already aware of and plan to fix soon. If you would like to provide feedback or updates, please send an email to x2kicker2x@gmail.com. GLHF!</Col>
          </Row>
        </Grid>
      );
    }
  }