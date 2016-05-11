/// <reference path="angular.js" />

//03.html
//Create the module
var myApp = angular.module("myModule", []);

//Create the Controller with the Module
myApp.controller("myController", function ($scope) {
	var employees = [
		{ firstName: 'Mats', lastName: 'Davidsson', age: 45 },
		{ firstName: 'Nikolai', lastName: 'Davydenko', age: 12 },
		{ firstName: 'Nils', lastName: 'Davydenko', age: 7 },
		{ firstName: 'Mirza', lastName: 'Selimasic', age: 47 },
		{ firstName: 'Nedisa', lastName: 'Selimasic', age: 13 },
		{ firstName: 'Nedis', lastName: 'Selimasic', age: 11 },
	];

	$scope.employees = employees;
}
);