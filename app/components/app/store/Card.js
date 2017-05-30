import React, { Component } from 'react';
import { Grid, Row, Col, Button }   from 'react-bootstrap';
// import Select from 'react-select';
// import { Link } from 'react-router-dom'

// import 'react-select/dist/react-select.css';

// import Tag from './Tag.js';
// import logo from './../../css/images/list/logo.jpg';

// import NavBar  			from './../NavBar';
import Banner 			from './../Banner.js';
import StoreRating 		from './Rating.js';
import StoreButtonBar 	from './ButtonBar.js';

import banner 			from './../../../css/images/detail/banner.jpg';


class Card extends Component {

  // constructor() {
  //   super();

    // this.viewDetail = this.viewDetail.bind(this);

    // this.state = {
    //   active: false
    // };
  // }


  // viewDetail(e) {
  //   e.preventDefault();
	
  // }

  render() {
    return (
    	<div className="Card">
  			<Banner img={banner} alt="Banner"/>
			<Grid>
				<Row>
					<Col xs={12} className="text-center">            	
						<h1>Sterling Casa de Cambio</h1>
						<StoreRating rating={5.0} />
						<address>Av. Vallarta # 1234 Centro comercial Gran Plaza. Local #12</address>
					</Col>
				</Row>
				<Row>
					<Col xs={6}><Button href="/map" bsStyle="info" bsSize="small" block>0.5 Km <i className="fa fa-arrow-right"></i> Cómo llegar</Button></Col>
					<Col xs={6}><Button href="/favorites" bsStyle="info" bsSize="small" block><i className="fa fa-heart-o"></i> Agregar a Favoritos</Button></Col>
				</Row>
				<Row>
					<Col xs={12}>
						<StoreButtonBar />
					</Col>
				</Row>
			</Grid>
    	</div>
    );
  }
}

export default Card;