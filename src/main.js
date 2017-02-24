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
		this.deleteRecipeById = this.deleteRecipeById.bind(this);
		this.getIndexByRecipeId = this.getIndexByRecipeId.bind(this);
	}

	appendRecipeList(recipe) {
		console.log("arg: " + recipe); 
		this.setState({ recipes: this.state.recipes.concat([recipe]) });
		localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
	}

	deleteRecipeById(recipeId) {
		var recipeIndex = this.getIndexByRecipeId(recipeId);

		this.setState({
			recipes: this.state.recipes.filter((x,i) => i != recipeIndex)
		});
	}

	getIndexByRecipeId(recipeId) {
		for(var i=0; i<this.state.recipes.length; i++) {
			if(this.state.recipes[i].id == recipeId) {
				return i;
			}
		}
	}

	render() {
		localStorage.setItem('recipes', JSON.stringify(this.state.recipes));

		return (
		  <div>
		    <AddRecipe addNewRecipe={this.appendRecipeList} />
		    <RecipeList recipeList={this.state.recipes} deleteRecipeById={this.deleteRecipeById} />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('recipe-box'));
