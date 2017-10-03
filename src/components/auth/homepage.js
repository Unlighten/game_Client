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
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Patch 0.02</h3>More information coming soon!</Col>
            <Col sm={6} md={1}></Col>
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Patch 0.01</h3>More information coming soon!</Col>
            <Col sm={6} md={1}></Col>
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Patch 0.00</h3>More information coming soon!</Col>
            <Col sm={6} md={1}></Col>
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Launch Day</h3>We officially launched today on 10-4-17! Welcome to the first version of CMDR! </Col>
          </Row>
        </Grid>
      );
    }
  }