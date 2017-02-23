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
		var EditButton = require('react-button');

		if(this.state.showIngredients == true) {
			return (
			  <div className="recipe-list-item">
			    <div onClick={this.toggleShowIngredients}>
			      <h1>{this.props.recipeName}</h1>
			      <p>{this.props.recipeIngredients}</p>
			    </div>
			    <input type="button" value="Edit Recipe" />
			    <input type="button" value="Delete Recipe" />
			  </div>
			);
		}
		else {
			return (
		      <div className="recipe-list-item">
			    <div onClick={this.toggleShowIngredients}>
			      <h1>{this.props.recipeName}</h1>
			    </div>
			    <input type="button" value="Edit Recipe" />
			    <input type="button" value="Delete Recipe" />
			  </div>
			);
		}
	}
}

export default RecipeDetail;