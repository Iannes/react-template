import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "react-router";
import Form from "../assets/styles/Form";
// import formatMoney from '../utils/formatMoney';
import Error from "./ErrorMessage";

const CREATE_ITEM_MUTATION = gql`
	mutation CREATE_ITEM_MUTATION(
		$name: String!
		$category: String!
		$estimatedAmount: String
		$totalAmount: String
	) {
		createItem(
			name: $name
			category: $category
			estimatedAmount: $estimatedAmount
			totalAmount: $totalAmount
		) {
			id
		}
	}
`;

class AddItem extends Component {
	state = {
		name: "",
		category: "",
		estimatedAmount: "",
		totalAmount: ""
	};
	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === "number" ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return (
			<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
				{(createItem, { loading, error }) => (
					<Form
						data-test="form"
						onSubmit={async e => {
							// Stop the form from submitting
							e.preventDefault();
							// call the mutation
							const res = await createItem();
							// change them to the single item page
							console.log(res);
							Router.push({
								pathname: "/item",
								query: { id: res.data.createItem.id }
							});
						}}
					>
						<Error error={error} />
						<fieldset disabled={loading} aria-busy={loading}>
							<label htmlFor="name">
								name
								<input
									type="text"
									id="name"
									name="name"
									placeholder="name"
									required
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</label>
							<label htmlFor="category">
								category
								<textarea
									id="category"
									name="category"
									placeholder="Enter category"
									required
									value={this.state.category}
									onChange={this.handleChange}
								/>
							</label>

							<label htmlFor="price">
								Estimated Amount
								<input
									type="number"
									id="estimatedAmount"
									name="estimatedAmount"
									placeholder="estimatedAmount"
									required
									value={this.state.estimatedAmount}
									onChange={this.handleChange}
								/>
							</label>

							<label htmlFor="totalAmount">
								totalAmount
								<textarea
									id="totalAmount"
									name="totalAmount"
									placeholder="Enter the total amount"
									required
									value={this.state.totalAmount}
									onChange={this.handleChange}
								/>
							</label>
							<button type="submit">Submit</button>
						</fieldset>
					</Form>
				)}
			</Mutation>
		);
	}
}

export default AddItem;
export { CREATE_ITEM_MUTATION };
