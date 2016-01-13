app.controller('MainController', ["$scope", "reddit", function($scope, reddit) {
  $scope.name = "Sports App";

  reddit.success(function(data) {
    $scope.threads = data.data.children;
  });
}]);