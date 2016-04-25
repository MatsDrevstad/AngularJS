/// <reference path="angular.js" />

var myModule = angular.module('myModule', [])
    .controller('myController', function ($scope) {
        $scope.message = "Call Of Duty";

        var employees = [
            { firstName: 'Mats', lastName: 'Drevstad', age: 45 },
            { firstName: 'Nikolai', lastName: 'Davydenko', age: 12 },
            { firstName: 'Nils', lastName: 'Davydenko', age: 7 },
            { firstName: 'Mirza', lastName: 'Selimasic', age: 47 },
            { firstName: 'Nedisa', lastName: 'Selimasic', age: 13 },
            { firstName: 'Nedis', lastName: 'Selimasic', age: 11 },
        ];

        $scope.employees = employees;
    });

//02.html
//Create the module
var myApp02 = angular.module("myModule02", []);

//Create the Controller
var myController = function ($scope) { //using an anonymous function
    $scope.message = "Angular JS Test";
}

//Create the Controller with the Module
myApp02.controller("myController02", myController);