import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, ControlLabel, Button }   from 'react-bootstrap';
import Select from 'react-select';
// import { Link } from 'react-router-dom'

import 'react-select/dist/react-select.css';

// import Tag from './Tag.js';
// import logo from './../../css/images/list/logo.jpg';

import NavBar  from './../NavBar';
import StoreCard from './Card.js';


class Info extends Component {

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
  			<div className="Info">
		        <form>
		        	<Grid>
		        		<Row>
		        			<Col xs={12} className="text-left">
		        				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores explicabo, incidunt esse delectus inventore autem. Alias illo, magni omnis doloribus impedit, facere ad odit, placeat totam illum expedita quam, nulla.</p>
		        				<p><b>Horario:</b> L - S 9:00hrs a 19hrs</p>
		        				<p><b>Sitio web:</b> <a href="http://www.sterling-cambio.com">www.sterling-cambio.com</a></p>
		        			</Col>
		        		</Row>
		        		<Row>
		        			<Col xs={12} className="text-center">
		        				<a href="#">
		        					<span className="fa-stack fa-lg">
		        						<i className="fa fa-circle fa-stack-2x brand-primary"></i>
		        						<i className="fa fa-facebook fa-stack-1x fa-inverse"></i>	
		        					</span>
		        				</a>
		        				<a href="#">
		        					<span className="fa-stack fa-lg">
		        						<i className="fa fa-circle fa-stack-2x gray-lighter"></i>
		        						<i className="fa fa-instagram fa-stack-1x fa-inverse"></i>	
		        					</span>
		        				</a>
		        				<a href="#">
		        					<span className="fa-stack fa-lg">
		        						<i className="fa fa-circle fa-stack-2x brand-info"></i>
		        						<i className="fa fa-twitter fa-stack-1x fa-inverse"></i>	
		        					</span>
		        				</a>
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

export default Info;