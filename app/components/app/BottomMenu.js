import React, { Component } from 'react';
import { ButtonGroup, Button }   from 'react-bootstrap';
// import { slide as Menu } from 'react-burger-menu';
// import Select from 'react-select';
import { Link } from 'react-router-dom'

// import 'react-select/dist/react-select.css';


class BottomMenu extends Component {

  render() {
    return (
        <div className="Footer">
          <div className="BottomMenu">
            <ButtonGroup justified>
              <Button href="#">
            <i className="fa fa-home fa-2x"></i>
              </Button>
              <Button href="#">
            <i className="fa fa-map-marker fa-2x"></i>
              </Button>
              <Link to="/favorites" className="btn btn-default">
                <i className="fa fa-heart-o fa-2x"></i>
              </Link>
              <Link to="/currencies" className="btn btn-default">
                <i className="fa fa-usd fa-2x"></i>
              </Link>
              <Button href="#">
            <i className="fa fa-user-o fa-2x"></i>
              </Button>
            </ButtonGroup>
          </div>
        </div>
    );
  }
}

export default BottomMenu;