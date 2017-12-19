angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get({
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
      query: 'new orleans',
      radius: 100,
      type: restaurant,
      key: API_KEY})
    .then(function({data}) {
      if(callback) {
        console.log(data);
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});