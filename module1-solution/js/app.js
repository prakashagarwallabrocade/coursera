(function(){
  'use sctrict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController)
  .filter("my",myFilterFactory);
LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
$scope.myText="i likes u"
  $scope.showMessage=  function (){
    var input= $scope.lunchItems;
    if(undefined == input || input.length ==0){
        $scope.message="Please enter data first likes";
    }else{
    var res = input.trim().split(",");
    console.log(res.length);
    if(0===res.length){
      $scope.message="Please enter data first";
    }else if(res.length <= 3){
      $scope.message="likes Enjoy!";
    }else if(res.length > 3){
      $scope.message="likes Too much!";

    }
    }
  };
  }
  function myFilterFactory(){
    return function(input){
      return input.replace("likes", "loves");
    };
  }
})();
