var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngResource']);

angular.
module('PokemonApp').
config(['$routeProvider','$httpProvider','$resourceProvider',
    function config($routeProvider, $httpProvider, $resourceProvider) {

        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
            when('/edit/:pokemonId', {
                templateUrl: 'src/EditPokemon/EditPokemon.html',
                controller: 'EditPokemonCtrl'
            }).
        otherwise({
            redirectTo: '/'
        });
        $httpProvider.defaults.headers.common = {
            "application-id": "F8C627E9-5428-BD94-FFFD-F4469E64C100",
            "secret-key": "4089B3FB-BC5B-1967-FF9F-1D8475134200"
        };
        $resourceProvider.defaults.headers = {
            "application-id": "F8C627E9-5428-BD94-FFFD-F4469E64C100",
            "secret-key": "4089B3FB-BC5B-1967-FF9F-1D8475134200"
        };
    }
]);
