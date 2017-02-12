import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/RecipeList';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div>
		    <RecipeList />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('recipe-box'));
