import React, { Component } from 'react';
// import { ButtonGroup, Button }   from 'react-bootstrap';
// import Select from 'react-select';
// import { Link } from 'react-router-dom'

// import 'react-select/dist/react-select.css';


class Banner extends Component {

  // constructor() {
  //   super();

  //   // this.open = this.open.bind(this);

  //   this.state = {
  //     active: false
  //   };
  // }


  // open(e) {
  //   e.preventDefault();
	 //  this.setState({ showSearchbar: true });
  // }

  render() {
    return (
      <div className="Banner">
      	<img src={this.props.img} alt={this.props.alt} className="img-responsive"/>
      </div>
    );
  }
}

export default Banner;