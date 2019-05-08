import React, { Component } from "react";

class AddItem extends Component {
	
	state = {
		name: "",
		category: "",
		estimatedAmount: "",
		totalAmount: "",
	};
	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === "number" ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return <p>hi</p>;
	}
}

export default AddItem;
