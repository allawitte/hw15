'use strict';

pokemonApp.controller('EditPokemonCtrl', function($scope, PokemonsService, $routeParams) {

    $scope.newPokemon = {};
    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(pokemonData) {
        $scope.pokemon = pokemonData.data;
    });
    $scope.editPokemon = function(myPokemon) {
        console.log($scope.pokemon);
        PokemonsService.editPokemon($routeParams['pokemonId'], $scope.pokemon).then(function(pokemonData) {
            $scope.pokemon = {};
        });

    };

});
/**
 * Created by HP on 11/25/2016.
 */
