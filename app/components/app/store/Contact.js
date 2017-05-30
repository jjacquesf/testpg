import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, Button }   from 'react-bootstrap';
import Select from 'react-select';
// import { Link } from 'react-router-dom'

import 'react-select/dist/react-select.css';

// import Tag from './Tag.js';
// import logo from './../../css/images/list/logo.jpg';

import NavBar  from './../NavBar';
import StoreCard from './Card.js';


class Contact extends Component {

  // constructor() {
  //   super();

  //   this.viewDetail = this.viewDetail.bind(this);

  //   this.state = {
  //     active: false
  //   };
  // }


  // viewDetail(e) {
  //   e.preventDefault();
	
  // }



  render() {
    return (
    	<div className="Store">
  			<NavBar to="/stores-list" title="DETALLES" />
  			<StoreCard />
  			<div className="Contact">
		        <form>
		        	<Grid>
		        		<Row>
		        			<Col xs={12}><b>PONTE EN CONTACTO</b></Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12}><br/></Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12}>
					            <Select
					              name="city"
					              placeholder="Enviar mensaje"
					            />
		        			</Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12}><br/></Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12}>
					            <FormControl type="textarea" placeholder="mensaje"/>
		        			</Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12}><br/></Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12} className="text-center">
		        				<Button bsStyle="success">ENVIAR MENSAJES</Button>
		        			</Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12}><br/></Col>
		        		</Row>
		        	</Grid>
		        </form>
  			</div>
    	</div>
    );
  }
}

export default Contact;