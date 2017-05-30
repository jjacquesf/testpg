import React, { Component } from 'react';
import { Grid, Row, Col, Button }   from 'react-bootstrap';
import Select from 'react-select';
// import { Link } from 'react-router-dom'

import 'react-select/dist/react-select.css';

// import Tag from './Tag.js';
import special from './../../../css/images/detail/special.jpg';

import NavBar  from './../NavBar';
import StoreCard from './Card.js';


class Special extends Component {

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
  			<div className="Special">
	        	<Grid>
	        		<Row>
	        			<Col xs={12}><b>CONOCE NUESTRAS PROMOCIONES</b></Col>
	        		</Row>
	        		<Row>
	        			<Col xs={12}><br/></Col>
	        		</Row>
	        		<Row>
	        			<Col xs={12}>
				            <img src={special} alt="Promocion" className="img-responsive"/>
	        			</Col>
	        		</Row>
	        		<Row>
	        			<Col xs={12}><br/></Col>
	        		</Row>
					<Row>
						<Col xs={6}><Button href="/map" bsStyle="info" bsSize="small" block>Consultar condiciones</Button></Col>
						<Col xs={6}><Button href="/favorites" bsStyle="info" bsSize="small" block><i className="fa fa-heart-o"></i> Agregar a Favoritos</Button></Col>
					</Row>
					<Row>
	        			<Col xs={12}><br/></Col>
	        		</Row>
	        	</Grid>
  			</div>
    	</div>
    );
  }
}

export default Special;