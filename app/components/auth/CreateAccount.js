import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Checkbox }   from 'react-bootstrap';
import Select from 'react-select';
// import { Link } from 'react-router-dom'

import 'react-select/dist/react-select.css';

class CreateAccount extends Component {

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
    console.log('showModal', this.state.showModal);
  }

  close(e) {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
      	<Button bsStyle="warning" block onClick={(e) => this.open(e)} className="not-round">CREAR CUENTA</Button>
      	<Modal className="Dialog" show={this.state.showModal} onHide={(e) => this.close(e)}>
			<Modal.Header closeButton>
				<Modal.Title>CREAR UNA CUENTA</Modal.Title>
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


          <FormGroup>
            <ControlLabel>Estado</ControlLabel>
            <Select
              name="state"
              placeholder="Selecciona un Estado"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Ciudad</ControlLabel>
            <Select
              name="city"
              placeholder="Selecciona un Ciudad"
            />
          </FormGroup>

          <Checkbox>Acepto los Términos y Condiciones</Checkbox>
        </form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={(e) => this.close(e)} className="btn btn-success">CREAR CUENTA</Button>
			</Modal.Footer>
      	</Modal>
      </div>
    );
  }
}

export default CreateAccount;