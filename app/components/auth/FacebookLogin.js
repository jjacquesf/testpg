import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class FacebookLogin extends Component {

  render() {
    return (
      <Link to="/{this.props.match.params.lang}/login" className="btn btn-block btn-primary not-round">INICIAR CON FACEBOOK</Link>
    );
  }
}

export default FacebookLogin;