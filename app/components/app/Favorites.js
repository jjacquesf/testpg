import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab }   from 'react-bootstrap';
// import { Link } from 'react-router-dom'

// import Tag from './Tag.js';
// import logo from './../../css/images/list/logo.jpg';
import special from './../../css/images/detail/special.jpg';


import NavBar  from './NavBar';
import StoreListItem  from './store/ListItem.js';
import SpecialStoreListItem  from './store/SpecialListItem.js';


class Favorites extends Component {

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
  			<NavBar to="/stores-list" title="FAVORITOS" />
  			<div className="Favorites">
  				<Tabs defaultActiveKey={1} id="favorite-tabs">
  					<Tab eventKey={1} title="CASAS">
				       <Grid fluid>
				         <StoreListItem />
				         <StoreListItem />
				         <StoreListItem />
				         <StoreListItem />
				         <StoreListItem />
				         <StoreListItem />
				         <StoreListItem />
				         <StoreListItem />
				         <StoreListItem />
				         <StoreListItem />
				         <StoreListItem />
				         <StoreListItem />
				         <br/>
				         <br/>
				       </Grid>
  					</Tab>
  					<Tab eventKey={2} title="PROMOCIONES">
				       <Grid fluid>
						<Row>
							<Col xs={12}>
								<br/>
							</Col>
						</Row>
						<SpecialStoreListItem />
						<Row>
							<Col xs={12}>
								<img src={special} alt="Promocion" className="img-responsive"/>
							</Col>
						</Row>
						<Row>
							<Col xs={12}>
								<br/>
							</Col>
						</Row>
						<SpecialStoreListItem />
						<Row>
							<Col xs={12}>
								<img src={special} alt="Promocion" className="img-responsive"/>
							</Col>
						</Row>
						<br/>
						<br/>
				       </Grid>
  					</Tab>
  				</Tabs>
  			</div>
    	</div>
    );
  }
}

export default Favorites;