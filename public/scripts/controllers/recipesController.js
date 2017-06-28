(function () {
	'use strict';

	angular.module('app')
		.controller('recipesController', function ($scope, dataService, $location, $route) {

			// get all recipe categories
			$scope.getAllCategories = dataService.getAllCategories(function (response) {
				$scope.recipeCategories = response.data;
			});

			// get all recipes
			$scope.getAllRecipes = dataService.getAllRecipes(function (response) {
				$scope.recipes = response.data;
				console.log($scope.recipes);
			});

			// go to recipe detail
			$scope.goToRecipeDetail = function (recipeId) {
				const path = `/edit/${recipeId}`;
				$location.url(path);
			};

			// delete a recipe
			$scope.deleteRecipe = function (recipeId) {
				const confirmBox = confirm('Are you sure you want to delete this recipe?');
				if (confirmBox) {
					dataService.deleteRecipe(recipeId, function () {
						$route.reload();
					});
				}
			};

			// add a recipe
			$scope.addRecipe = function () {
				$location.url('/add');
			}
		});
})();