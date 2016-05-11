/// <reference path="angular.js" />

//05.html
//Create the module
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { firstName: 'Mats', lastName: 'Davidsson', gender: 'Male', salary: '55555', age: 45 },
            { firstName: 'Nikolai', lastName: 'Dawsson', gender: 'Male', salary: '44444', age: 12 },
            { firstName: 'Nils', lastName: 'Dawsson', gender: 'Male', salary: '33333', age: 7 },
            { firstName: 'Mirza', lastName: 'Svensson', gender: 'Male', salary: '55555', age: 47 },
            { firstName: 'Nedisa', lastName: 'Svensson', gender: 'Male', salary: '44444', age: 13 },
            { firstName: 'Nedis', lastName: 'Svensson', gender: 'Male', salary: '33333', age: 11 },
        ];
        $scope.employees = employees;

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
