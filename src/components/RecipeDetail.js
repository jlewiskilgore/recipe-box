import React, { Component } from 'react';

class RecipeDetail extends Component {
	constructor(props) {
		super(props);

		this.state = { showIngredients: false, editMode: false };

		this.toggleShowIngredients = this.toggleShowIngredients.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEditSave = this.handleEditSave.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	toggleShowIngredients() {
		if(this.state.showIngredients == true) {
			this.setState({ showIngredients: false });
		}
		else {
			this.setState({ showIngredients: true });
		}
	}

	handleDelete() {
		this.props.deleteRecipe(this.props.recipeId);
	}

	handleEditSave() {
		var rName = this.refs.recipeName;
		var rIngredients = this.refs.recipeIngredients;

		if(rName.value !== '' && rIngredients.value !== '') {
			this.props.editRecipe(this.props.recipeId, rName.value, rIngredients.value);
			this.setState({ editMode: false, showIngredients: false });
		}
	}

	handleEdit() {
		if(this.state.editMode == false) {
			this.setState({ editMode: true });
		}
	}

	handleCancel() {
		if(this.state.editMode == true) {
			this.setState({ editMode: false, showIngredients: false });
		}
	}

	render() {
		if(this.state.editMode == true) {
			return (
			  <div className="recipe-list-item">
			    <div onClick={this.toggleShowIngredients}>
			      <h1>Editing: {this.props.recipeName}</h1>
			      <label>Recipe Name:</label>
			      <input className="edit-recipe-text" type="text" defaultValue={this.props.recipeName} ref="recipeName" />
			      <br />
			      <label>Recipe Ingredients:</label>
			      <input className="edit-recipe-text" type="text" defaultValue={this.props.recipeIngredients} ref="recipeIngredients" />
			      			    </div>
			      			    <input type="button" value="Save" onClick={this.handleEditSave} />
			      			    <input type="button" value="Cancel" onClick={this.handleCancel} />
			  </div>
			);
		}
		else if(this.state.showIngredients == true) {
			return (
			  <div className="recipe-list-item">
			    <div onClick={this.toggleShowIngredients}>
			      <h1>{this.props.recipeName}</h1>
			      <p>{this.props.recipeIngredients}</p>
			    </div>
			    <input type="button" value="Edit Recipe" onClick={this.handleEdit} />
			    <input type="button" value="Delete Recipe" onClick={this.handleDelete} />
			  </div>
			);
		}
		else {
			return (
		      <div className="recipe-list-item">
			    <div onClick={this.toggleShowIngredients}>
			      <h1>{this.props.recipeName}</h1>
			    </div>
			    <input type="button" value="Edit Recipe" onClick={this.handleEdit} />
			    <input type="button" value="Delete Recipe" onClick={this.handleDelete} />
			  </div>
			);
		}
	}
}

export default RecipeDetail;