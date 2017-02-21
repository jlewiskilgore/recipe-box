import React, { Component } from 'react';
import RecipeDetail from './RecipeDetail';

class RecipeList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.recipeList);
		return (
		  <div>
		  	  {
		  	  	this.props.recipeList.map(function(recipe, index) {
		  	  		return (
		  	  			<RecipeDetail recipeId={recipe.id} recipeName={recipe.name} recipeIngredients={recipe.ingredients} />
		  	  		)
		  	  	}.bind(this))
		  	  }
		  </div>
		)
	}
}

export default RecipeList;
