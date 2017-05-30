import React, { Component } from 'react';

import ClassNames from 'classnames';

// import { ButtonGroup, Button }   from 'react-bootstrap';
// import Select from 'react-select';
// import { Link } from 'react-router-dom'

// import 'react-select/dist/react-select.css';


class Tag extends Component {

  // constructor() {
  //   super();

  //   this.open = this.open.bind(this);

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
      <span className={ClassNames('Tag', this.props.type)}>{this.props.name}</span>
    );
  }
}

export default Tag;