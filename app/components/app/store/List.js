import React, { Component } from 'react';
import { Grid }   from 'react-bootstrap';

import BottomMenu     from './../BottomMenu.js';
import Banner         from './../Banner.js';

import SearchForm     from './SearchForm.js';
import StoreListItem  from './ListItem.js';

import banner_img from './../../../css/images/detail/banner.jpg';


class List extends Component {

  render() {
    return (
      <div className="Store">
       <SearchForm />
       <Banner img={banner_img} alt="Banner"/>
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
       <BottomMenu />
      </div>
    );
  }
}

export default List;