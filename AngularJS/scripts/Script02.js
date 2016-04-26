/// <reference path="angular.js" />

//02.html
//Create the module
var myApp = angular.module("myModule", []);

//Create the Controller
var myController = function ($scope) { //using an anonymous function
    $scope.message = "Angular JS Test";
}

//Create the Controller with the Module
myApp.controller("myController", myController);