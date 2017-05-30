import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Radio, Button }   from 'react-bootstrap';
import Select from 'react-select';
import ClassNames from 'classnames';
// import { Link } from 'react-router-dom'

import 'react-select/dist/react-select.css';
import 'animate.css/animate.css';


class SearchForm extends Component {

  constructor() {
    super();

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      showSearchBar: true
    };
  }


  open(e) {
    e.preventDefault();
	  this.setState({ showSearchBar: true });
  }

  close(e) {
    e.preventDefault();
	  this.setState({ showSearchBar: false });
  }

  render() {


    return (
      <div className={this.state.showSearchBar ? ClassNames('Header', 'animated', 'slideInDown') : ClassNames('Header', 'animated', 'slideOutUp')}>
	      <div className="SearchForm">
	        <Grid fluid>
	           <Row>
	            <Col xs={12} className="text-right">
	            	<a href="#" onClick={(e) => this.close(e)}><i className="fa fa-close fa-2x"></i></a>
	            </Col>
	           </Row>
	           <Row>
	            <Col xs={12}>
		          <FormGroup>
		            <FormControl type="text" placeholder="Buscar por palabre clave"/>
		          </FormGroup>
	            </Col>
	           </Row>
	           <Row>
	            <Col xs={6}>
		          <FormGroup>
		            <ControlLabel><i className="fa fa-circle-o"></i> Estoy buscando</ControlLabel>
		            <Select
		              name="currency"
		              placeholder="Divisa"
		            />
		          </FormGroup>
	            </Col>
	            <Col xs={6}>
		          <FormGroup>
		            <ControlLabel><i className="fa fa-map-marker"></i> Ciudad</ControlLabel>
		            <Select
		              name="city"
		              placeholder="Elige la ciudad"
		            />
		          </FormGroup>
	            </Col>
	           </Row>
	           <Row>
	            <Col xs={4}>
		          Orden por
	            </Col>
	            <Col xs={4}>
	            	<FormGroup>
	            		<Radio inline> Cercanía</Radio> 
	            	</FormGroup>
	            </Col>
	            <Col xs={4}>
	            	<FormGroup>
	            		<Radio inline> Precio</Radio>
	            	</FormGroup>
	            </Col>
	           </Row>
	           <Row>
	            <Col xs={12} className="text-center">
	            	<Button bsStyle="default">BUSCAR</Button>
	            </Col>
	           </Row>
	         </Grid>
	      </div>
	  </div>
    );
  }
}

export default SearchForm;