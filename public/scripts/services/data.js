'use strict';

angular.module('app')
	.service('dataService', function ($http) {

		this.getAllRecipes = $http.get('http://localhost:5000/api/recipes')
			.then(function (response) {
				return response.data;
			});

		this.getAllCategories = $http.get('http://localhost:5000/api/categories')
			.then(function (response) {
				return response.data;
			});

		this.getAllFoodItems = $http.get('http://localhost:5000/api/fooditems')
			.then(function (response) {
				return response.data;
			});

		this.getCategoryRecipes = $http.get('http://localhost:5000/api/recipes?category={category}')
			.then(function (response) {
				return response.data;
			});

		this.getRecipeById = $http.get('http://localhost:5000/api/recipes/{id}')
			.then(function (response) {
				return response.data;
			});

		this.updateRecipeById = $http.put('http://localhost:5000/api/recipes/{id}')
			.then(function (response) {
				return response.data;
			});

		this.addRecipe = $http.post('http://localhost:5000/api/recipes')
			.then(function (response) {
				return response.data;
			});

		this.deleteRecipe = $http.delete('http://localhost:5000/api/recipes/{id}')
			.then(function (response) {
				return response.data;
			});
	});