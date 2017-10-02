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
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Patch 0.02</h3>When the original Destiny was first announced, its aesthetic was presented as a strange, gripping mixture of high fantasy and the lived-in sci-fi of Bungie's iconic Halo franchise. Heroic space wizards wield powers given by a mysterious supergod trapped in a brilliant white orb, wearing shining armor that's as much medieval majesty as space-faring survivalism—and all of it set against a backdrop of space-race nostalgia. But then the game itself came out, and the weirder parts of the world had been sanded down to almost nothing. </Col>
            <Col sm={6} md={1}></Col>
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Patch 0.01</h3>When the original Destiny was first announced, its aesthetic was presented as a strange, gripping mixture of high fantasy and the lived-in sci-fi of Bungie's iconic Halo franchise. Heroic space wizards wield powers given by a mysterious supergod trapped in a brilliant white orb, wearing shining armor that's as much medieval majesty as space-faring survivalism—and all of it set against a backdrop of space-race nostalgia. But then the game itself came out, and the weirder parts of the world had been sanded down to almost nothing. </Col>
            <Col sm={6} md={1}></Col>
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Patch 0.00</h3>When the original Destiny was first announced, its aesthetic was presented as a strange, gripping mixture of high fantasy and the lived-in sci-fi of Bungie's iconic Halo franchise. Heroic space wizards wield powers given by a mysterious supergod trapped in a brilliant white orb, wearing shining armor that's as much medieval majesty as space-faring survivalism—and all of it set against a backdrop of space-race nostalgia. But then the game itself came out, and the weirder parts of the world had been sanded down to almost nothing. </Col>
            <Col sm={6} md={1}></Col>
            <Col className="RU-Box" sm={6} md={2}><h3 className="RU-Box-Title">Launch Day</h3>When the original Destiny was first announced, its aesthetic was presented as a strange, gripping mixture of high fantasy and the lived-in sci-fi of Bungie's iconic Halo franchise. Heroic space wizards wield powers given by a mysterious supergod trapped in a brilliant white orb, wearing shining armor that's as much medieval majesty as space-faring survivalism—and all of it set against a backdrop of space-race nostalgia. But then the game itself came out, and the weirder parts of the world had been sanded down to almost nothing. </Col>
          </Row>
        </Grid>
      );
    }
  }