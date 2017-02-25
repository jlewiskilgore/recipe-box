import React, { Component } from 'react';

class AddRecipe extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault(); // Don't refresh the page

		var rName = this.refs.recipeName;
		var rIngredients = this.refs.recipeIngredients;

		if(rName.value !== "" && rIngredients.value !== "") {
			// Generate Unique ID for Recipe
			var ids = require('short-id');
			var rId = ids.generate();

			var rName = this.refs.recipeName;
			var rIngredients = this.refs.recipeIngredients;
			var recipe = {id: rId, name: rName.value, ingredients: rIngredients.value};

			console.log("new recipe: " + recipe);
			console.log(recipe.name.value + " " + recipe.ingredients.value);
			// Send New Recipe Data to Parent

			this.props.addNewRecipe(recipe);
			// Clear the form's text fields
			rName.value = '';
			rIngredients.value = '';
		}
	}

	render() {
		return (
			 <div id="add-recipe-form">
			   <h2>Add Recipe</h2>
			   <form onSubmit={this.handleSubmit}>
			     <label>Recipe Name:</label>   
			     <input type="text" ref="recipeName" />
			     <br />
			     <br />
			     <label>Recipe Ingredients: </label> 
			     <input type="text" ref="recipeIngredients" />
			     <br />
			     <br />
                 <input type="submit" value="Save" />
			   </form>
			 </div>
		);
	}
}

export default AddRecipe;