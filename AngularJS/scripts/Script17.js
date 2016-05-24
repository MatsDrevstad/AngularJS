/// <reference path="angular.js" />

//Create the module
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http) {

        $http.get("WebService1.asmx/GetAllEmployees")
            .then(function (response) {

                $scope.employees = response.data;
            });
    }
);
