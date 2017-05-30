import React, { Component } from 'react';
// import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Radio, Button }   from 'react-bootstrap';
// import Select from 'react-select';
// import ClassNames from 'classnames';
import { Link } from 'react-router-dom'

// import 'react-select/dist/react-select.css';
// import 'animate.css/animate.css';


class NavBar extends Component {

  render() {
    return (
		<div className="Top">
			<div className="NavBar text-center">
        <Link to={this.props.to} className="pull-left">
          <i className="fa fa-chevron-left"></i>
        </Link>
				{this.props.title}
			</div>
			<div className="clearfix"></div>
		</div>
    );
  }
}

export default NavBar;