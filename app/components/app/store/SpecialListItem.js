import React, { Component } from 'react';
import { Row, Col }   from 'react-bootstrap';
// import Select from 'react-select';
import { Link } from 'react-router-dom'

// import 'react-select/dist/react-select.css';
import Tag from './Tag.js';

import logo from './../../../css/images/list/logo.jpg';

class SpecialListItem extends Component {

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
							    	</td>
							    </tr>
			    			</tbody>
			    		</table>
		            </Col>
		          </Row>
            	</Link>
            </Col>
          </Row>        
    );
  }
}

export default SpecialListItem;