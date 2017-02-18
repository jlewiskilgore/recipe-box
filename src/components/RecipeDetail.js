import React, { Component } from 'react';

class RecipeDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			  <ul>
			    <h1>{this.props.recipeName}</h1>
			    <p>{this.props.recipeIngredients}</p>
			  </ul>
		);
	}
}

export default RecipeDetail;