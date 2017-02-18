import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { recipes: [] };

		this.appendRecipeList = this.appendRecipeList.bind(this);
	}

	appendRecipeList(recipe) {
		console.log("arg: " + recipe); 
		this.setState({ recipes: this.state.recipes.concat([recipe]) });
	}

	render() {
		console.log(this.state.recipes);
		return (
		  <div>
		    <AddRecipe addNewRecipe={this.appendRecipeList} />
		    <RecipeList recipeList={this.state.recipes} />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('recipe-box'));
