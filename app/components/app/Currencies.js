import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab }   from 'react-bootstrap';
// import { Link } from 'react-router-dom'

// import Tag from './Tag.js';
// import logo from './../../css/images/list/logo.jpg';
import usd from './../../css/images/detail/usd.jpg';
import eur from './../../css/images/detail/eur.jpg';

import flag_usd from './../../css/images/detail/flag-usd-white.jpg';
import flag_eur from './../../css/images/detail/flag-eur-white.jpg';

import azteca 	from './../../css/images/detail/azteca.jpg';
import banorte 	from './../../css/images/detail/banorte.jpg';
import banamex 	from './../../css/images/detail/banamex.jpg';
import bansi 	from './../../css/images/detail/bansi.jpg';


import NavBar  from './NavBar';
// import StoreListItem  from './store/ListItem.js';
// import SpecialStoreListItem  from './store/SpecialListItem.js';


class Currencies extends Component {

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
  			<NavBar to="/stores-list" title="TIPO DE CAMBIO" />
  			<div className="Currencies">
  				<Tabs defaultActiveKey={1} id="favorite-tabs">
  					<Tab eventKey={1} title="XE CURRENCY">
  						<table className="table" width="100%">
  							<thead>
  								<tr>
  									<td></td>
                    <td></td>
  									<th className="text-center">
  										<img src={flag_usd} alt="USD"/> <br/>
  										USD
  									</th>
  									<th className="text-center">
  										<img src={flag_eur} alt="EUR"/> <br/>
  										EUR
  									</th>
  								</tr>
  							</thead>
                <tbody>
                  <tr>
                    <td><img src={flag_usd} alt="USD"/> <br/></td>
                    <td>
                      1 USD <br/>
                      Inverso:
                    </td>
                    <td>
                      1,00000 <br/>
                      1,00000
                    </td>
                    <td>
                      0,93211 <br/>
                      1,07284
                    </td>
                  </tr>
                  <tr>
                    <td><img src={flag_eur} alt="EUR"/> <br/></td>
                    <td>
                      1 EUR <br/>
                      Inverso:
                    </td>
                    <td>
                      1,07284 <br/>
                      1,93211
                    </td>
                    <td>
                      1,00000 <br/>
                      1,00000
                    </td>
                  </tr>
                  <tr>
                    <td><img src={flag_usd} alt="USD"/> <br/></td>
                    <td>
                      1 USD <br/>
                      Inverso:
                    </td>
                    <td>
                      1,00000 <br/>
                      1,00000
                    </td>
                    <td>
                      0,93211 <br/>
                      1,07284
                    </td>
                  </tr>
                  <tr>
                    <td><img src={flag_eur} alt="EUR"/> <br/></td>
                    <td>
                      1 EUR <br/>
                      Inverso:
                    </td>
                    <td>
                      1,07284 <br/>
                      1,93211
                    </td>
                    <td>
                      1,00000 <br/>
                      1,00000
                    </td>
                  </tr>
                </tbody>
  						</table>
  					</Tab>
  					<Tab eventKey={2} title="INTERBANCARIO">
  						<table className="table" width="100%">
  							<thead>
  								<tr>
  									<th>
  										<img src={usd} alt="USD"/> Dólar Americano
  									</th>
  									<th>
  										Ordernar por Venta
  									</th>
  								</tr>
  							</thead>
  							<tbody>
  								<tr>
  									<th></th>
  									<th>
  										<table width="100%">
  											<tbody>
  												<tr>
  													<td>Compra</td>
  													<td>Venta</td>
  												</tr>
  											</tbody>
  										</table>
  									</th>
  								</tr>
  								<tr>
  									<th><img src={azteca} alt="Banco Azteca" className="bank img-responsive"/></th>
  									<th>
  										<table width="100%">
  											<tbody>
  												<tr>
  													<td>$20.45</td>
  													<td>$20.72</td>
  												</tr>
  											</tbody>
  										</table>
  									</th>
  								</tr>
  								<tr>
  									<th><img src={banorte} alt="Banorte" className="bank img-responsive"/></th>
  									<th>
  										<table width="100%">
  											<tbody>
  												<tr>
  													<td>$20.45</td>
  													<td>$20.72</td>
  												</tr>
  											</tbody>
  										</table>
  									</th>
  								</tr>
  								<tr>
  									<th><img src={banamex} alt="Banamex" className="bank img-responsive"/></th>
  									<th>
  										<table width="100%">
  											<tbody>
  												<tr>
  													<td>$20.45</td>
  													<td>$20.72</td>
  												</tr>
  											</tbody>
  										</table>
  									</th>
  								</tr>
  								<tr>
  									<th><img src={bansi} alt="Bansi" className="bank img-responsive"/></th>
  									<th>
  										<table width="100%">
  											<tbody>
  												<tr>
  													<td>$20.45</td>
  													<td>$20.72</td>
  												</tr>
  											</tbody>
  										</table>
  									</th>
  								</tr>
  							</tbody>
  						</table>
  					</Tab>
  				</Tabs>
  			</div>
    	</div>
    );
  }
}

export default Currencies;