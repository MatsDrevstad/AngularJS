/// <reference path="angular.js" />

//05.html
//Create the module
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { firstName: 'Mats', lastName: 'Drevstad', dateOfBirth: new Date("January 6, 1971"), gender: 'Male', salary: '55555.65234' },
            { firstName: 'Nikolai', lastName: 'Davydenko', dateOfBirth: new Date("April 25, 2003"), gender: 'Male', salary: '44444' },
            { firstName: 'Nils', lastName: 'Davydenko', dateOfBirth: new Date("October 8, 2008"), gender: 'Male', salary: '33333.35' },
            { firstName: 'Mirza', lastName: 'Selimasic', dateOfBirth: new Date("January 1, 1969"), gender: 'Female', salary: '55555.56' },
            { firstName: 'Nedisa', lastName: 'Selimasic', dateOfBirth: new Date("December 20, 2002"), gender: 'Female', salary: '44444.64' },
            { firstName: 'Nedis', lastName: 'Selimasic', dateOfBirth: new Date("December 22, 2005"), gender: 'Male', salary: '33333.00' },
        ];
        $scope.employees = employees;
        $scope.sortColumn = 'name';
    }
);
