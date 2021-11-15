import React, { Component } from "react";
import MainContent from "./MainContent";
import Navbar from "./Navbar";

class App extends Component {
  
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<MainContent />
			</React.Fragment>
		);
	}
}

export default App;
