/// <reference path="Script13.js" />

myApp.filter('gender', function() {
	return function(gender) {
		switch(gender) {
			case 1:
				return 'Male';
			case 2:
				return 'Female';
			default:
				return 'Not disclosed';
		}
	}
})

myApp.filter('salary', function() {
	return function(salary) {
		if(salary > 40000) {
			return 'Not disclosed';
		}
		else {
			return salary;
		}
	}
})