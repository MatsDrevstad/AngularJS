/// <reference path="angular.js" />

//05.html
//Create the module
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { name: 'Mats Davidsson', dateOfBirth: new Date("January 6, 1971"), gender: 'Male', salary: '55555.65234' },
            { name: 'Nikolai Davydenko', dateOfBirth: new Date("April 25, 2003"), gender: 'Male', salary: '44444' },
            { name: 'Nils Davydenko', dateOfBirth: new Date("October 8, 2008"), gender: 'Male', salary: '33333.35' },
            { name: 'Mirza Selimasic', dateOfBirth: new Date("January 1, 1969"), gender: 'Female', salary: '55555.56' },
            { name: 'Nedisa Selimasic', dateOfBirth: new Date("December 20, 2002"), gender: 'Female', salary: '44444.64' },
            { name: 'Nedis Selimasic', dateOfBirth: new Date("December 22, 2005"), gender: 'Male', salary: '33333.00' },
        ];
        $scope.employees = employees; $scope.sortColumn = 'name'; $scope.reverseSort = false;

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? $scope.reverseSort = !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }
        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            }
            return '';
        }
    }
);
