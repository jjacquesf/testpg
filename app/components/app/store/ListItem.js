import React, { Component } from 'react';
import { Row, Col }   from 'react-bootstrap';
// import Select from 'react-select';
import { Link } from 'react-router-dom'

// import 'react-select/dist/react-select.css';
import Tag from './Tag.js';

import logo from './../../../css/images/list/logo.jpg';

class ListItem extends Component {

  constructor() {
    super();

    this.viewDetail = this.viewDetail.bind(this);

    // this.state = {
    //   active: false
    // };
  }


  viewDetail(e) {
    e.preventDefault();
	
  }

  render() {
    return (
          <Row className="ListItem">
            <Col xs={12}>
            	<Link to="/store-currencies">
            	
		          <Row>
		            <Col xs={12}>            	
			    		<table width="100%">
			    			<tbody>
							    <tr>
							    	<td width="25%"><img src={logo} alt="Get Money" className="logo img-responsive img-circle"/></td>
							    	<td className="info" width="50%">
								   		<h3>Globo Cambio</h3>
								   		<p className="location">Guadalajara, Jalisco</p>
							    	</td>
							    	<td width="25%">
								   		<table className="table currency">
								   			<thead>
								   				<tr>
									   				<th>Dólares</th>
									   				<th></th>
									   			</tr>	
								   			</thead>
								   			<tbody>
									   			<tr>
									   				<th>Compra</th>
									   				<td width="50%">$20.16</td>
									   			</tr>
									   			<tr>
									   				<th>Venta</th>
									   				<td width="50%">$22.71</td>
									   			</tr>
								   			</tbody>
								   		</table>
							    	</td>
							    </tr>
			    			</tbody>
			    		</table>
		            </Col>
		          </Row>
		          <Row>
		          	<Col xs={12}>
		          		<Tag type="odd" name="Abierto"/>
		          		<Tag type="even" name="2.2 Km"/>
		          	</Col>
		          </Row>

            	</Link>
            </Col>
          </Row>        
    );
  }
}

export default ListItem;