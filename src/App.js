import React, { Component } from "react";

import Navbar from "./Navbar";
import ShoppingCart from './ShoppingCart';

class App extends Component {
  
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<ShoppingCart />
			</React.Fragment>
		);
	}
}

export default App;
