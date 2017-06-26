(function () {
	'use strict';

	angular.module('app')
		.controller('recipesController', function ($scope, dataService, $location, $route) {

			$scope.getAllCategories = dataService.getAllCategories(function (response) {
				$scope.recipeCategories = response.data;
			});

			$scope.getAllRecipes = dataService.getAllRecipes(function (response) {
				$scope.recipes = response.data;
				console.log($scope.recipes);
			});

			$scope.goToRecipeDetail = function (recipeId) {
				const path = `/edit/${recipeId}`;
				$location.url(path);
			};

			$scope.deleteRecipe = function (recipeId) {
				dataService.deleteRecipe(recipeId, function() {
					$route.reload();
				});
			};

			$scope.addRecipe = function() {
				$location.url('/add');
			}
		});
})();