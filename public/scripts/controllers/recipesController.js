(function () {
	'use strict';

	angular.module('app')
		.controller('recipesController', function ($scope, dataService, $location) {

			dataService.getAllCategories(function (response) {
				$scope.recipeCategories = response.data;
			});

			dataService.getAllRecipes(function (response) {
				$scope.recipes = response.data;
			});

			$scope.filterRecipes = function (category) {
				if (category === null) {
					dataService.getAllCategories();
				} else {
					dataService.getCategoryRecipes(category, function (response) {
						$scope.categoryRecipes = response.data;
					})
				}
			}
		});
})();