'use strict';

pokemonApp.controller('PokemonListCtrl', function ($scope, PokemonsService, BerriesService, Entry, $q) {
    $scope.pokemons = [];
    var page = 10;
    var offset = 1;
    $scope.dataLoading = true;

    PokemonsService.getPokemons(page, offset).then(function (pokemonsData) {

        $scope.pokemons = $scope.pokemons.concat(pokemonsData.data.data);
        if (offset < 830) {
            offset += 10;
            PokemonsService.getPokemons(page, offset);
        }
    });

    Entry.get(null, function (res) {
        $scope.berries = res.data;
        console.log(res.data);
        $scope.dataLoading = false;
    });

    Entry.query(null, function (res) {
        $scope.berries = res.data;
        console.log(res.data);
        $scope.dataLoading = false;
    });


    $scope.myOrderProperty = 'weight';

});
