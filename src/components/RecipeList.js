import React, { Component } from 'react';
import RecipeDetail from './RecipeDetail';

class RecipeList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div>
		  	  <RecipeDetail />
		  	  <RecipeDetail />
		  	  <RecipeDetail />
		  </div>
		)
	}
}

export default RecipeList;
