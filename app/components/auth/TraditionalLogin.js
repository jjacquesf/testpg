import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl }   from 'react-bootstrap';

// import { Link } from 'react-router-dom'

class TraditionalLogin extends Component {

  constructor() {
    super();

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      showModal: false
    };
  }


  open(e) {
    e.preventDefault();
	  this.setState({ showModal: true });
  }

  close(e) {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
      	<Button bsStyle="success" className="not-round" block onClick={(e) => this.open(e)}>INICIAR SESIÓN</Button>
      	<Modal className="Dialog" show={this.state.showModal} onHide={(e) => this.close(e)}>
			<Modal.Header closeButton>
				<Modal.Title>INICIAR SESIÓN</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				
				<form>
		          <FormGroup>
		            <ControlLabel>Usuario</ControlLabel>
		            <FormControl type="text" placeholder="Escribe tu email"/>
		          </FormGroup>
		          <FormGroup>
		            <ControlLabel>Password</ControlLabel>
		            <FormControl type="password" placeholder="Escribe tu contraseña"/>
		          </FormGroup>
		        </form>

			</Modal.Body>
			<Modal.Footer>
				<Button onClick={(e) => this.close(e)}>INICIAR SESIÓN</Button>
			</Modal.Footer>
      	</Modal>
      </div>
    );
  }
}

export default TraditionalLogin;