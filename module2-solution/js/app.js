(function(){
  'use sctrict';
  
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];


  function ToBuyController(ShoppingListCheckOffService){
    var toBuy=this;

  toBuy.buyList = ShoppingListCheckOffService.toBuyList();
toBuy.buyItem= function(itemIndex){
  console.log("i am called...");
  ShoppingListCheckOffService.buyItem(itemIndex);
}


  }

  function AlreadyBoughtController(ShoppingListCheckOffService){
      var bought=this;
      bought.boughtList = ShoppingListCheckOffService.boughtList();

  }

function ShoppingListCheckOffService(){
var service= this;
var toBuy =[
  { name: "cookies 1", quantity: 1 },
  { name: "cookies 2", quantity: 2 },
  { name: "cookies 3", quantity: 3 },
  { name: "cookies 4", quantity: 4 },
  { name: "cookies 5", quantity: 5 }

];
var bought =[];
service.toBuyList= function(){
  return toBuy;
}
service.boughtList= function(){
  console.log("bought::"+bought.length);
  return bought;
}

service.buyItem = function (itemIndex) {
  console.log("buyItem index::"+itemIndex);
    bought.push(toBuy[itemIndex]);
    console.log(bought);
  toBuy.splice(itemIndex, 1);

};

}

})();
