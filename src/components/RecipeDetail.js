import React, { Component } from 'react';

class RecipeDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("RD: " + this.props.recipeName);
		return (
			  <ul>{this.props.recipeName}</ul>
		);
	}
}

export default RecipeDetail;