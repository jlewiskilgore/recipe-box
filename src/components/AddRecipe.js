import React, { Component } from 'react';

class AddRecipe extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			 <div>
			   <h2>Add Recipe</h2>
			   <form>
			     <label>
			       Recipe Name:   
			         <input type="text" name="recipeName" />
			     </label>
			     <br />
			     <br />
			     <label>
			       Recipe Ingredients:   
			         <input type="text" name="recipeIngredients" />
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