(function () {
    'use strict';

    angular.module('app')
        .controller('recipeDetailController', function ($scope, dataService, $location, $routeParams) {
            // get all categories
            $scope.getAllCategories = dataService.getAllCategories(function (response) {
                $scope.recipeCategories = response.data;
                console.log($scope.recipeCategories);
            });

            $scope.getAllRecipes = dataService.getAllRecipes(function (response) {
                $scope.recipes = response.data;
                console.log($scope.recipes);
            });

            // get all food items
            $scope.getAllFoodItems = dataService.getAllFoodItems(function (response) {
                $scope.foodItems = response.data;
                console.log($scope.foodItems);
            });

            // return user to recipes screen from recipe detail
            $scope.cancelRecipe = function () {
                $location.url('/');
            }

            // save a recipe
            $scope.saveRecipe = function (recipe) {
                if ($location.url() === `/edit/${recipe._id}`) {
                    dataService.updateRecipeById(recipe._id, recipe, function () {
                        $location.url('/');
                    });
                }

                if ($location.url() === `/add`) {
                    dataService.addRecipe(recipe, function () {
                        $scope.recipes.push(recipe);
                        $location.url('/');
                    });
                }
            }

            // delete a recipe ingredient
            $scope.deleteRecipeIngredient = function ($index) {
                $scope.recipe.ingredients.splice($index, 1);
            }

            // add a recipe ingredient
            $scope.addRecipeIngredient = function () {
                $scope.recipe.ingredients.push({
                    foodItem: '',
                    condition: '',
                    amount: ''
                });
            }

            // delete recipe step
            $scope.deleteRecipeStep = function ($index) {
                $scope.recipe.steps.splice($index, 1);
            }

            // add a recipe step
            $scope.addRecipeStep = function () {
                $scope.recipe.steps.push({
                    description: ''
                });
            }

            // check if adding or updating a recipe, show respective screens
            $scope.checkRecipe = function () {
                const url = $location.path();
                if (url == '/add') {
                    $scope.recipe = {
                        name: '',
                        description: '',
                        category: '',
                        prepTime: '',
                        cookTime: '',
                        ingredients: [
                            {
                                foodItem: '',
                                condition: '',
                                amount: ''
                            }
                        ],
                        steps: [
                            {
                                description: ''
                            }
                        ]
                    }
                } else {
                    // show the selected recipe
                    dataService.getRecipeById($routeParams.id, function (response) {
                        $scope.recipe = response.data;
                        console.log($scope.recipe);
                    });
                }
            };

            $scope.checkRecipe();
        });
})();