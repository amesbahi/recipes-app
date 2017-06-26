(function () {
    'use strict';

    angular.module('app')
        .controller('recipeDetailController', function ($scope, dataService, $location, $routeParams) {
            // categories for dropdown
            $scope.getAllCategories = dataService.getAllCategories(function (response) {
                $scope.recipeCategories = response.data;
                console.log($scope.recipeCategories);
            });

            $scope.getAllRecipes = dataService.getAllRecipes(function (response) {
                $scope.recipes = response.data;
                console.log($scope.recipes);
            });

            // food items for dropdown
            $scope.getAllFoodItems = dataService.getAllFoodItems(function (response) {
                $scope.foodItems = response.data;
                console.log($scope.foodItems);
            });

            $scope.cancelRecipe = function () {
                $location.url('/');
            }

            // $scope.saveRecipe = function (recipe) {
            //     dataService.addRecipe($scope.recipe, function () {
            //         if ($location.url('/add')) {
            //             $scope.recipes.push($scope.recipe);
            //             $location.url('/');
            //         }

            //         if ($location.url('/edit/')) {
            //             dataService.updateRecipeById($scope.recipe._id, function () {
            //                 $location.url('/');
            //             });
            //         }
            //     });
            // }

            $scope.saveRecipe = function (recipe) {
                if ($location.url('/edit/')) {
                    dataService.updateRecipeById($scope.recipe._id, function () {
                        $location.url('/');
                    });
                }

                if ($location.url('/add')) {
                    dataService.addRecipe($scope.recipe, function () {
                        $scope.recipes.push($scope.recipe);
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
                    // show the specified recipe
                    dataService.getRecipeById($routeParams.id, function (response) {
                        $scope.recipe = response.data;
                        console.log($scope.recipe);
                    });
                }
            };

            $scope.checkRecipe();
        });
})();