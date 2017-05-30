import React, { Component } from 'react';
import { ButtonGroup, Button }   from 'react-bootstrap';
// import Select from 'react-select';
import { Link } from 'react-router-dom'

// import 'react-select/dist/react-select.css';

// import Tag from './Tag.js';
// import logo from './../../css/images/list/logo.jpg';

// import NavBar  from './NavBar';
// import Banner from './Banner.js';
// import StoreRating from './StoreRating.js';

// import banner from './../../css/images/detail/banner.jpg';


class ButtonBar extends Component {

  // constructor() {
    // super();

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
      <div className="ButtonBar text-center">
        <ButtonGroup>
          <Link to="/store-currencies" className="btn btn-default">
             <i className="fa fa-usd fa-2x"></i>
          </Link>
          <Link to="/store-calculator" className="btn btn-default">
             <i className="fa fa-calculator fa-2x"></i>
          </Link>
          <Link to="/store-info" className="btn btn-default">
             <i className="fa fa-info fa-2x"></i>
          </Link>
          <Link to="/store-contact" className="btn btn-default">
             <i className="fa fa-envelope-o fa-2x"></i>
          </Link>
          <Link to="/store-special" className="btn btn-default">
             <i className="fa fa-percent fa-2x"></i>
          </Link>
        </ButtonGroup>
        </div>
    );
  }
}

export default ButtonBar;