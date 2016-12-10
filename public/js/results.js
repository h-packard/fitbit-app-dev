var app = angular.module('myApp');

app.controller('showResults', function($scope, dataService) {
	console.log('result ctrl loaded');
	$scope.fitBitInfo = dataService.sendFitBitObj();
	console.log($scope.fitBitInfo);
});
