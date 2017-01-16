(function(){
  
  angular.module('app',[])
    .controller('Controller', Controller);
  
  Controller.$inject = ['$scope'];
  function Controller($scope){
    var self = this;
    $scope.message;
    $scope.dishes;
    $scope.count = function(){
      console.log(self.dishes);
      if ($scope.dishes != undefined){
          var arrayOfStrings = $scope.dishes.split(",");
        if(arrayOfStrings.length <= 3 ){
          $scope.message = "Enjoy!";
        }
        else{
          $scope.message = "Too much!";
        }
      }
      else{
        $scope.message = "Please enter data first";
      }
    };
  }
})();
