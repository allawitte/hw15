angular
    .module('PokemonApp')
    .factory('BerriesService', function ($http, $resource) {
        var self = this;
        $http.defaults.useXDomain = true;
        return {

            getBerries: function() {
                return $http({
                    method: 'GET',
                    url: 'https://api.backendless.com/v1/data/berries'
                });

            }
        }
    })
    .factory('Entry', function($resource) {
        return $resource('https://api.backendless.com/v1/data/berries/:objectId',
            {
        objectId: '@objectId'
    },
            {
                headers: {
                    "application-id": "F8C627E9-5428-BD94-FFFD-F4469E64C100",
                    "secret-key": "4089B3FB-BC5B-1967-FF9F-1D8475134200"
                }

            },
            {
                query: {
                    method: 'GET',
                    isArray: false,
                    transformResponse: function(res) {
                        console.log('resourse');
                        return angular.fromJson(res).data;
                    }
                }
            }
        ); // Note the full endpoint address
    });
/**
 * Created by HP on 11/25/2016.
 */
