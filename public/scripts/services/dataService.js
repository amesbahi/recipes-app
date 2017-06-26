(function () {
	'use strict';

	angular.module('app')
		.service('dataService', function ($http) {

			// GET all recipes
			this.getAllRecipes = function(callback) {
				$http.get('http://localhost:5000/api/recipes')
				.then(callback);
			};

			// GET all recipe categories
			this.getAllCategories = function(callback) {
				$http.get('http://localhost:5000/api/categories')
				.then(callback);
			};

			// GET all food items
			this.getAllFoodItems = function(callback) {
				$http.get('http://localhost:5000/api/fooditems')
				.then(callback);
			};

			// GET recipes by category
			this.getCategoryRecipes = function(category, callback) {
				$http.get(`http://localhost:5000/api/recipes?category=${category.name}`)
				.then(callback);
			};

			// GET recipe by id
			this.getRecipeById = function(id, callback)	{
				$http.get(`http://localhost:5000/api/recipes/${id}`)
				.then(callback);
			};

			// Update recipe by id
			this.updateRecipeById = function(id, callback) {
				$http.put(`http://localhost:5000/api/recipes/${id}`)
				.then(callback);
			};

			// Add a recipe
			this.addRecipe = function(recipe, callback) {
				$http.post(`http://localhost:5000/api/recipes/${recipe}`)
				.then(callback);
			};

			// Delete a recipe
			this.deleteRecipe = function(id, callback) {
				$http.delete(`http://localhost:5000/api/recipes/${id}`)
				.then(callback);
			};
		});
})();