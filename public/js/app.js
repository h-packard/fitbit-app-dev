var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/home', {
    controller: 'homeView',
    templateUrl: 'html/homeView.html'
  })
  .when('/loggedIn', {
    controller: 'loggedInCtrl',
    templateUrl: 'html/loggedIn.html'
  })
  .when('/appView', {
    controller: 'showResults',
    templateUrl: 'html/appView.html'
  })
  .otherwise({
    redirectTo: '/home'
  });

  //configure the $location service:
  if(window.history && window.history.pushState){
    $locationProvider.html5Mode(true);
  }


});
