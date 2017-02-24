import React, { Component } from 'react';
import RecipeDetail from './RecipeDetail';

class RecipeList extends Component {
	constructor(props) {
		super(props);
	}

	deleteRecipe(recipeId) {
		console.log("Deleting recipe from list...");
		console.log(recipeId);
	}

	render() {
		console.log(this.props.recipeList);
		return (
		  <div>
		  	  {
		  	  	this.props.recipeList.map(function(recipe) {
		  	  		return (
		  	  			<RecipeDetail recipeId={recipe.id} recipeName={recipe.name} recipeIngredients={recipe.ingredients} deleteRecipe={this.deleteRecipe} />
		  	  		)
		  	  	}.bind(this))
		  	  }
		  </div>
		)
	}
}

export default RecipeList;
