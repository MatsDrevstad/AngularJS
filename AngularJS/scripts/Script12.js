/// <reference path="angular.js" />

//12.html
//Create the module
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { name: 'Mats Davidsson', dateOfBirth: new Date("January 6, 1971"), gender: 'Male', salary: '55555.65234' },
            { name: 'Nikolai Dawsson', dateOfBirth: new Date("April 25, 2003"), gender: 'Male', salary: '44444' },
            { name: 'Nils Dawsson', dateOfBirth: new Date("October 8, 2008"), gender: 'Male', salary: '33333.35' },
            { name: 'Mirza Svensson', dateOfBirth: new Date("January 1, 1969"), gender: 'Female', salary: '55555.56' },
            { name: 'Nedisa Svensson', dateOfBirth: new Date("December 20, 2002"), gender: 'Female', salary: '44444.64' },
            { name: 'Nedis Svensson', dateOfBirth: new Date("December 22, 2005"), gender: 'Male', salary: '33333.00' },
        ];
        $scope.employees = employees;

        $scope.search = function(item) {
			if($scope.searchText == undefined) {
				return true;
			}
			else {
				if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
					item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
					return true;
				}
			}
			return false;
		}
    }
);
