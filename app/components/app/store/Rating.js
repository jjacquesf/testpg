import React, { Component } from 'react';
// import { Grid, Row, Col }   from 'react-bootstrap';
import StarRating from 'react-rating';
// import {IntlProvider, FormattedMessage} from 'react-intl';
// import es from 'react-intl/locale-data/es';

// import Select from 'react-select';
// import { Link } from 'react-router-dom'

// import 'react-select/dist/react-select.css';

// import Tag from './Tag.js';
// import logo from './../../css/images/list/logo.jpg';

// import NavBar  from './NavBar';
// import Banner from './Banner.js';

// import banner from './../../css/images/detail/banner.jpg';


class Rating extends Component {

  // constructor() {
  //   super();

  //   this.viewRating = this.viewRating.bind(this);

  //   // this.state = {
  //   //   active: false
  //   // };
  // }

  // viewRating(e) {
  //   e.preventDefault();
	
  // }

  render() {
    return (
    	<div className="Rating">
	    	
				<span className="eval">
					5.0 
				</span>
				&nbsp;
				<StarRating
				  empty="fa fa-star-o"
				  full="fa fa-star"
				  fractions={2}
				  start={0}
				  stop={5}
				  readonly={true}
				  initialRate={this.props.rating}
				  className="Starts"
				/>
				&nbsp;
	            &#8226;
	            16 Opiniones 
	            &nbsp;
	            <a href="#">
	              Ver <i className="fa fa-eye"></i>
	            </a>
	    	
    	</div>
    );
  }
}

export default Rating;