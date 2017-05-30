import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Intro 				from './Intro.js';
import Login 				from './Login.js';
import Favorites 				from './app/Favorites.js';
import Currencies 				from './app/Currencies.js';
import StoresList 			from './app/store/List.js';
import StoreCurrencies 		from './app/store/Currencies.js';
import StoreCalculator 		from './app/store/Calculator.js';
import StoreInfo 			from './app/store/Info.js';
import StoreContact 		from './app/store/Contact.js';
import StoreSpecial 		from './app/store/Special.js';

const App = () => (
  <Router>
	  <div>
	    <Route exact path="/" component={Intro}/>
		<Route path="/:lang/login" component={Login} />
		<Route path="/stores-list" component={StoresList} />
		<Route path="/store-currencies" component={StoreCurrencies} />
		<Route path="/store-calculator" component={StoreCalculator} />
		<Route path="/store-info" component={StoreInfo} />
		<Route path="/store-contact" component={StoreContact} />
		<Route path="/favorites" component={Favorites} />
		<Route path="/currencies" component={Currencies} />
	  </div>
  </Router>
)


export default App;