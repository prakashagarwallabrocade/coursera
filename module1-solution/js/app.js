(function(){
  'use sctrict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

  $scope.showMessage=  function (){
    var input= $scope.lunchItems;
    if(undefined == input || input.length ==0){
        $scope.message="Please enter data first";
    }else{
    var res = input.trim().split(",");
    console.log(res.length);
    if(0===res.length){
      $scope.message="Please enter data first";
    }else if(res.length <= 3){
      $scope.message="Enjoy!";
    }else if(res.length > 3){
      $scope.message="Too much!";

    }
    }
  };
  }
})();
