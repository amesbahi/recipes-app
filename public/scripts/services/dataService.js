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

			this.getAllFoodItems = function(callback) {
				$http.get('http://localhost:5000/api/fooditems')
				.then(callback);
			};

			this.getCategoryRecipes = function(category, callback) {
				$http.get(`http://localhost:5000/api/recipes?category=${category.name}`)
				.then(callback);
			};

			this.getRecipeById = function(id, callback)	{
				$http.get(`http://localhost:5000/api/recipes/${id}`)
				.then(callback);
			};

			this.updateRecipeById = function(id, callback) {
				$http.put(`http://localhost:5000/api/recipes/${id}`)
				.then(callback);
			};

			this.addRecipe = function(callback) {
				$http.post('http://localhost:5000/api/recipes')
				.then(callback);
			};

			this.deleteRecipe = function(id, callback) {
				$http.delete(`http://localhost:5000/api/recipes/${id}`)
				.then(callback);
			};
		});
})();