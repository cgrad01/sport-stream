app.controller('MainController', function($scope, $http) {
  $scope.name = "Sports App";

  fetch();

  function fetch() {
    $http.get("http://www.reddit.com/r/NYKnicks.json")
    .success(function(response){$scope.threads = response.data.children;});
  }
});