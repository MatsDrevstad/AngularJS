/// <reference path="angular.js" />

//Create the module
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http, $log) {

        var successCallback = function (response) {
            $scope.employees = response.data;
        };

        var errorCallback = function (response) {
            $scope.error = response.data;
        };

        $http({
            method: 'GET',
            url: 'WebService1.asmx/GetAllEmployees'
        })
            .then(successCallback, errorCallback);
    }
);
