import React, { Component } from 'react';

class RecipeDetail extends Component {
	constructor(props) {
		super(props);

		this.state = { showIngredients: false };

		this.toggleShowIngredients = this.toggleShowIngredients.bind(this);
	}

	toggleShowIngredients() {
		if(this.state.showIngredients == true) {
			this.setState({ showIngredients: false });
		}
		else {
			this.setState({ showIngredients: true });
		}
	}

	render() {
		if(this.state.showIngredients == true) {
			return (
			  <ul onClick={this.toggleShowIngredients}>
			    <h1>{this.props.recipeName}</h1>
			    <p>{this.props.recipeIngredients}</p>
			  </ul>
			);
		}
		else {
			return (
			  <ul onClick={this.toggleShowIngredients}>
			    <h1>{this.props.recipeName}</h1>
			  </ul>
			);
		}
	}
}

export default RecipeDetail;