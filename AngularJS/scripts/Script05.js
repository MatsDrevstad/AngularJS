/// <reference path="angular.js" />

//05.html
//Create the module
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.message = "I sommar och soliga dagar";

        var employee = { firstName: 'Mats', lastName: 'Davidsson', age: 45 };
        $scope.employee = employee;
    }
);
