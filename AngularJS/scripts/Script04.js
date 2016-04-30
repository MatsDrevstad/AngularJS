/// <reference path="angular.js" />

//04.html
//Create the module
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var country = {
            name: "Sweden",
            capital: "Stockholm",
            flag: "/Images/Flag.png",
        };

        $scope.country = country;
    }
);
