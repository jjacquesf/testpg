import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.styl';

import logo from './../css/images/intro/logo.png';

// import 'bootstrap/dist/css/bootstrap-theme.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <Grid fluid>
          <Row>
            <Col xs={10} xsOffset={1} className="text-center">
              <img src={logo} alt="Get Money" className="img-responsive"/>
              <h3>BIENVENIDO</h3>
                <div>
                    <Link to="/es/login" className="btn btn-link">ESPAÑOL</Link>
                    |
                    <Link to="/en/login" className="btn btn-link">INGLES</Link> 
                </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Intro;