import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);

		var savedRecipes = JSON.parse(localStorage.getItem('recipes') || '{}');

		// Initialize to savedRecipes if it is not empty, otherwise []
		if(Object.getOwnPropertyNames(savedRecipes).length === 0)
			this.state = { recipes: [] };
		else {
			this.state = { recipes: savedRecipes };
		}

		console.log("test");
		console.log(savedRecipes);

		this.appendRecipeList = this.appendRecipeList.bind(this);
	}

	appendRecipeList(recipe) {
		console.log("arg: " + recipe); 
		this.setState({ recipes: this.state.recipes.concat([recipe]) });
		localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
	}

	render() {
		localStorage.setItem('recipes', JSON.stringify(this.state.recipes));

		return (
		  <div>
		    <AddRecipe addNewRecipe={this.appendRecipeList} />
		    <RecipeList recipeList={this.state.recipes} />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('recipe-box'));
