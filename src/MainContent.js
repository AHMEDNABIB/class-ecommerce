import React from "react";

class MainContent extends React.Component {
	state = {
		pageTitle: "Customers",
		customersCount: 5,

		customers: [
			{
				id: 1,
				name: "Scott",
				phone: "123-456",
				address: { city: "New Delhi" },
				photo: "https://picsum.photos/id/1010/60",
			},
			{
				id: 2,
				name: "Jones",
				phone: "982-014",
				address: { city: "New Jersy" },
				photo: "https://picsum.photos/id/1011/60",
			},
			{
				id: 3,
				name: "Allen",
				phone: "889-921",
				address: { city: "London" },
				photo: "https://picsum.photos/id/1012/60",
			},
			{
				id: 4,
				name: "James",
				phone: null,
				address: { city: "Berlin" },
				photo: "https://picsum.photos/id/1013/60",
			},
			{
				id: 5,
				name: "John",
				phone: null,
				address: { city: "New York" },
				photo: "https://picsum.photos/id/1014/60",
			},
		],
	};

	onRefreshClick = () => {
		this.setState({
			customersCount: 7,
		});
	};
	render() {
		return (
			<>
				<h4 className="m-1 p-1">
					{this.state.pageTitle}

					<span className="badge badge-secondary m-2 badge">
						{this.state.customersCount}
					</span>

					<button
						className="btn btn-info"
						onClick={this.onRefreshClick}>
						Refresh
					</button>
				</h4>

				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Customer Name</th>
							<th>Phone</th>
						</tr>
				  </thead>
				</table>
			</>
		);
	}
}

export default MainContent;
