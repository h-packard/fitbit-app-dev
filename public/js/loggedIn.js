var app = angular.module('myApp');

app.controller('loggedInCtrl', function($scope, $timeout, dataService)  {

  var params = {}, queryString = location.hash.substring(1),
  regex = /([^&=]+)=([^&]*)/g, m;
  while (m = regex.exec(queryString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  var accessToken = params.access_token;
  console.log(params.state); // always compare this value
  console.log(params.access_token);

  dataService.profileReq(accessToken);
  dataService.activitiesReq(accessToken);

  // $timeout(function() {
  //   $scope.fitBitInfo = dataService.sendFitBitObj();
  //   console.log($scope.fitBitInfo);
  // }, 500);

});
