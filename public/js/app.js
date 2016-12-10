var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {

  $routeProvider
  .when('/home', {
    controller: 'homeView',
    templateUrl: '/html/homeView.html'
  })
  .when('/loggedIn', {
    controller: 'loggedInCtrl',
    templateUrl: '/html/loggedIn.html'
  })
  .when('/appView', {
    controller: 'showResults',
    templateUrl: '/html/appView.html'
  })
  .otherwise({
    redirectTo: '/home'
  });

});
