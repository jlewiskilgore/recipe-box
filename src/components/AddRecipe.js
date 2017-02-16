import React, { Component } from 'react';

class AddRecipe extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault(); // Don't refresh the page
		var name = this.refs.recipeName;
		var ingredients = this.refs.recipeIngredients;
		console.log("new recipe: ");
		console.log(name.value + " " + ingredients.value);
		// Send New Recipe Data to Parent
		this.props.addNewRecipe(name);
		// Clear the form's text fields
		name.value = '';
		ingredients.value = '';
	}

	render() {
		return (
			 <div id="add-recipe-form">
			   <h2>Add Recipe</h2>
			   <form onSubmit={this.handleSubmit}>
			     <label>
			       Recipe Name:   
			         <input type="text" ref="recipeName" />
			     </label>
			     <br />
			     <br />
			     <label>
			       Recipe Ingredients:   
			         <input type="text" ref="recipeIngredients" />
			     </label>
			     <br />
			     <br />
                 <input type="submit" value="Save" />
			   </form>
			 </div>
		);
	}
}

export default AddRecipe;