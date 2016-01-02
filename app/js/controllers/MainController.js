app.controller('MainController', function($scope, $http) {
  $scope.name = "Sports App";
  $scope.threads = [];

  fetch();

  function fetch() {
    $http.get("http://www.reddit.com/r/NYKnicks.json")
    .success(function(response){
      for(i=0; i < response.data.children.length; i++){
        if(response.data.children[i].data.domain === "self.NYKnicks"){
          $scope.threads.push(response.data.children[i]);
        }
      }});
  }
});