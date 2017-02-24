import React, { Component } from 'react';

class RecipeDetail extends Component {
	constructor(props) {
		super(props);

		this.state = { showIngredients: false };

		this.toggleShowIngredients = this.toggleShowIngredients.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	toggleShowIngredients() {
		if(this.state.showIngredients == true) {
			this.setState({ showIngredients: false });
		}
		else {
			this.setState({ showIngredients: true });
		}
	}

	handleDelete() {
		console.log("test handleDelete");
		this.props.deleteRecipe(this.props.recipeId);
	}

	render() {
		if(this.state.showIngredients == true) {
			return (
			  <div className="recipe-list-item">
			    <div onClick={this.toggleShowIngredients}>
			      <h1>{this.props.recipeName}</h1>
			      <p>{this.props.recipeIngredients}</p>
			    </div>
			    <input type="button" value="Edit Recipe" />
			    <input type="button" value="Delete Recipe" onClick={this.handleDelete} />
			  </div>
			);
		}
		else {
			return (
		      <div className="recipe-list-item">
			    <div onClick={this.toggleShowIngredients}>
			      <h1>{this.props.recipeName}</h1>
			      <h2>{this.props.recipeId}</h2>
			    </div>
			    <input type="button" value="Edit Recipe" />
			    <input type="button" value="Delete Recipe" onClick={this.handleDelete} />
			  </div>
			);
		}
	}
}

export default RecipeDetail;