import React from "react";
import Product from "./Product";

class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
				products: [
					{ id: 1, productName: "iPhone", price: 8900, quantity: 0 },
					{ id: 2, productName: "iPhone", price: 8900, quantity: 0 },
					{ id: 3, productName: "iPhone", price: 8900, quantity: 0 },
					{ id: 4, productName: "iPhone", price: 8900, quantity: 0 },
				],
			};
    }


	handleIncrement = (product,maxValue) => {
		let allProducts = [...this.state.products];
		let index = allProducts.indexOf(product);
		//console.log(index);
        
        
         if (allProducts[index].quantity < maxValue) {
				allProducts[index].quantity++;

				//update the state of current component (parent component)
				this.setState({ products: allProducts });
			}
      
	};

	handleDecrement = (product, minValue) => {
		let allProducts = [...this.state.products];
		let index = allProducts.indexOf(product);
		//console.log(index);
		  if (allProducts[index].quantity > minValue) {
				allProducts[index].quantity--;

				//update the state of current component (parent component)
				this.setState({ products: allProducts });
			}
    };
    
    handleDelete = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        
        if (window.confirm("Are you sure to delete?")) {
			//delete product based on index
			allProducts.splice(index, 1);

			//update the state of current component (parent component)
			this.setState({ products: allProducts });
		}
    }

	render() {
		return (
			<div className="container-fluid">
				<h4>Shopping Cart</h4>
				<div className="row">
					{this.state.products.map((prod) => {
						return (
							<Product
								key={prod.id}
								// id={prod.id}
								// productName={prod.productName}
								// price={prod.price}
								product={prod}
								onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            >
								<button className="btn btn-primary">
									Buy Now
								</button>
							</Product>
						);
					})}
				</div>
			</div>
		);
	}
}

export default ShoppingCart;
