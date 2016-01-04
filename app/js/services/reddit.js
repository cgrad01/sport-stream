app.factory('reddit', ['$http', function($http) {
  return $http.get("http://www.reddit.com/r/NYKnicks.json")
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);