import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter, Routes} from "react-router-dom";
import CustomersList from "./CustomersList";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import NoMatchPage from "./NoMatchPage";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/customers" element={<CustomersList />} />
					<Route path="/cart" element={<ShoppingCart />} />
					<Route path="*" element={<NoMatchPage />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
