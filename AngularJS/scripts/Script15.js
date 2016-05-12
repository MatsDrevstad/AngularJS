/// <reference path="angular.js" />

//Create the module
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var countries = [
            {
                countryName: 'Sweden',
                cities: [
                    { cityName: 'Gothenburg' },
                    { cityName: 'Stockholm' },
                    { cityName: 'Lund' },
                ]
            },
            {
                countryName: 'Norway',
                cities: [
                    { cityName: 'Oslo' },
                    { cityName: 'Bergen' },
                ]
            },
            {
                countryName: 'Finland',
                cities: [
                    { cityName: 'Helsinki' },
                    { cityName: 'Kotka' },
                ]
            },
        ];
        $scope.countries = countries;

    }
);
