import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class GuestUser extends Component {

  render() {
    return (
      <Link to="/stores-list" className="btn btn-block btn-link not-round">NO INICIAR SESIÓN</Link>
    );
  }
}

export default GuestUser;