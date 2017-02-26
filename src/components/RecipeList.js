import React, { Component } from 'react';
import RecipeDetail from './RecipeDetail';

class RecipeList extends Component {
	constructor(props) {
		super(props);

		this.deleteRecipe = this.deleteRecipe.bind(this);
		this.editRecipe = this.editRecipe.bind(this);
	}

	deleteRecipe(recipeId) {
		this.props.deleteRecipeById(recipeId);
	}

	editRecipe(recipeId, recipeName, recipeIngredients) {
		this.props.editRecipeById(recipeId, recipeName, recipeIngredients);
	}

	render() {
		console.log(this.props.recipeList);
		return (
		  <div>
		  	  {
		  	  	this.props.recipeList.map(function(recipe) {
		  	  		return (
		  	  			<RecipeDetail recipeId={recipe.id} 
		  	  						  recipeName={recipe.name} 
		  	  						  recipeIngredients={recipe.ingredients} 
		  	  					 	  deleteRecipe={this.deleteRecipe} 
		  	  						  editRecipe={this.editRecipe} />
		  	  		)
		  	  	}.bind(this))
		  	  }
		  </div>
		)
	}
}

export default RecipeList;
