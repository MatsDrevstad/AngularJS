﻿/// <reference path="angular.js" />

//28
var app = angular.module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController"
            })
            .when("/courses", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController"
            })
            .when("/students", {
                templateUrl: "Templates/students.html",
                controller: "studentsController"
            })
        .otherwise({
            redirectTo: "/home"
        })
        $locationProvider.html5Mode(true);
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($scope, $http) {
        $http.get("StudentService.asmx/GetAllStudents")
                                .then(function (response) {
                                    $scope.students = response.data;
                                })
    })

////27
//var app = angular.module("Demo", ["ngRoute"])
//    .config(function ($routeProvider, $locationProvider) {
//        $routeProvider
//            .when("/home", {
//                templateUrl: "Templates/home.html",
//                controller: "homeController"
//            })
//            .when("/courses", {
//                templateUrl: "Templates/courses.html",
//                controller: "coursesController"
//            })
//            .when("/students", {
//                templateUrl: "Templates/students.html",
//                controller: "studentsController"
//            })
//        $locationProvider.html5Mode(true);
//    })
//    .controller("homeController", function ($scope) {
//        $scope.message = "Home Page";
//    })
//    .controller("coursesController", function ($scope) {
//        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
//    })
//    .controller("studentsController", function ($scope, $http) {
//        $http.get("StudentService.asmx/GetAllStudents")
//                                .then(function (response) {
//                                    $scope.students = response.data;
//                                })
//    })


////25, 26
//var app = angular.module("Demo", ["ngRoute"])
//    .config(function ($routeProvider) {
//        $routeProvider
//            .when("/home", {
//                templateUrl: "Templates/home.html",
//                controller: "homeController"
//            })
//            .when("/courses", {
//                templateUrl: "Templates/courses.html",
//                controller: "coursesController"
//            })
//            .when("/students", {
//                templateUrl: "Templates/students.html",
//                controller: "studentsController"
//            })
//    })
//    .controller("homeController", function ($scope) {
//        $scope.message = "Home Page";
//    })
//    .controller("coursesController", function ($scope) {
//        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
//    })
//    .controller("studentsController", function ($scope, $http) {
//        $http.get("StudentService.asmx/GetAllStudents")
//                                .then(function (response) {
//                                    $scope.students = response.data;
//                                })
//    })




