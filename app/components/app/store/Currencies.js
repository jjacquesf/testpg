import React, { Component } from 'react';
// import { Grid, Row, Col, Button }   from 'react-bootstrap';
// import Select from 'react-select';
// import { Link } from 'react-router-dom'

// import 'react-select/dist/react-select.css';

// import Tag from './Tag.js';
// import logo from './../../css/images/list/logo.jpg';

import NavBar  from './../NavBar';
import StoreCard from './Card.js';

import currency from './../../../css/images/detail/currency.jpg';

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
  			<NavBar to="/stores-list" title="DETALLES" />
  			<StoreCard />
        <p className="total text-center text-danger">Actualizado: 10 Mayo 2017 8:35am</p>
        <div className="Currencies">
          <table className="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th>Compra</th>
                <th>Venta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={currency} alt="" className="img-circle"/> Dólar Americano</td>
                <td>$ 20.45</td>
                <td>$ 20.72</td>
              </tr>
              <tr>
                <td><img src={currency} alt="" className="img-circle"/> Dólar Americano</td>
                <td>$ 20.45</td>
                <td>$ 20.72</td>
              </tr>
              <tr>
                <td><img src={currency} alt="" className="img-circle"/> Dólar Americano</td>
                <td>$ 20.45</td>
                <td>$ 20.72</td>
              </tr>
              <tr>
                <td><img src={currency} alt="" className="img-circle"/> Dólar Americano</td>
                <td>$ 20.45</td>
                <td>$ 20.72</td>
              </tr>
              <tr>
                <td><img src={currency} alt="" className="img-circle"/> Dólar Americano</td>
                <td>$ 20.45</td>
                <td>$ 20.72</td>
              </tr>
            </tbody>
          </table>
        </div>
    	</div>
    );
  }
}

export default Currencies;