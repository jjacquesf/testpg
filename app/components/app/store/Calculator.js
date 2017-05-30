import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, ControlLabel, Button }   from 'react-bootstrap';
import Select from 'react-select';
// import { Link } from 'react-router-dom'

import 'react-select/dist/react-select.css';

// import Tag from './Tag.js';
// import logo from './../../css/images/list/logo.jpg';

import NavBar  from './../NavBar';
import StoreCard from './Card.js';


class Calculator extends Component {

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
  			<div className="Calculator">
		        <form>
		        	<Grid>
		        		<Row>
		        			<Col xs={3}>
					            <ControlLabel>Quiero</ControlLabel>
		        			</Col>
		        			<Col xs={9}>
					            <Select
					              name="city"
					              placeholder="Selecciona una opción"
					            />
		        			</Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12}><br/></Col>
		        		</Row>
		        		<Row>
		        			<Col xs={3}>
					            <ControlLabel>Monto</ControlLabel>
		        			</Col>
		        			<Col xs={4}>
					            <FormControl type="text" placeholder="0"/>
		        			</Col>
		        			<Col xs={5}>
					            <Select
					              name="city"
					              placeholder="Divisa"
					            />
		        			</Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12}><br/></Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12} className="text-center">
		        				<p className="price text-danger">TOTAL: $ 17,639.11 MXP</p>
		        			</Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12} className="text-center">
		        				<Button bsStyle="success">APARTAR DIVISAS</Button>
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

export default Calculator;