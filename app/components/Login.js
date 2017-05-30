import React, { Component } from 'react';
import { Grid, Row, Col }   from 'react-bootstrap';

import CreateAccount    from './auth/CreateAccount';
import TraditionalLogin from './auth/TraditionalLogin';
import FacebookLogin    from './auth/FacebookLogin';
import GuestUser        from './auth/GuestUser';

import 'bootstrap/dist/css/bootstrap.css';
import './../css/style.css';

import logo from './../css/images/intro/logo.png';

// import 'bootstrap/dist/css/bootstrap-theme.css';

class Login extends Component {

  render() {
    return (
      <div className="Login">
        <Grid fluid>
          <Row>
            <Col xs={10} xsOffset={1} className="text-center">
              <img src={logo} alt="Get Money" className="img-responsive"/>
              <br/>
              <CreateAccount />
              <br/>
              <TraditionalLogin />
              <br/>
              <FacebookLogin />
              <br/>
              <GuestUser />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;