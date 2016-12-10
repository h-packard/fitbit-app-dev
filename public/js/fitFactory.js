var app = angular.module('myApp');

app.service('dataService', function($http) {

  var accessToken;
  var fitBitInfo = {};

  return {

    profileReq: function(token) {
      accessToken = token;
      console.log(accessToken);

      $http({
        method: 'GET',
        url: 'https://api.fitbit.com/1/user/-/profile.json',
        headers: {
         'Authorization': 'Bearer ' + accessToken
        }
      }).then(function successCallback(data) {
        fitBitInfo.profile = data;
        console.log(fitBitInfo);
        return fitBitInfo;
      });

    },

    activitiesReq: function(token) {
      accessToken = token;
      console.log(accessToken);

      $http({
        method: 'GET',
        url: 'https://api.fitbit.com/1/user/-/activities/date/today.json',
        headers: {
         'Authorization': 'Bearer ' + accessToken
        }
      }).then(function successCallback(data) {
        fitBitInfo.activities = data;
        console.log(fitBitInfo);
        return fitBitInfo;
      });

    },

    sendFitBitObj: function() {
      return fitBitInfo;
    }


  };

//  var reqActivities = {
//   method: 'GET',
//   url: 'https://api.fitbit.com/1/user/-/activities/date/today.json',
//   headers: {
//  	 'Authorization': 'Bearer ' + fragment.access_token
//   }
// };


});
