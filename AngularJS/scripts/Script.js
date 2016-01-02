/// <reference path="angular.js" />

var myModule = angular.module('myModule', [])
    .controller('myController', function ($scope) {
        $scope.message = "Call Of Duty";

        var employees = [
            { firstName: 'Mats', lastName: 'Drevstad', age: 44 },
            { firstName: 'Nikolai', lastName: 'Davydenko', age: 12 },
            { firstName: 'Nils', lastName: 'Davydenko', age: 7 },
            { firstName: 'Mirza', lastName: 'Selimasic', age: 47 },
            { firstName: 'Nedisa', lastName: 'Selimasic', age: 13 },
            { firstName: 'Nedis', lastName: 'Selimasic', age: 10 },
        ];

        $scope.employees = employees;
    });