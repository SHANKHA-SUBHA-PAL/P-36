class Food{
constructor(foodStock,lastFed){



getFoodStock(){

var foodStockRef = database.ref('Food');
foodStockRef.on("value",function(data){foodStock = data.val()})

}
updateFoodStock(x){

    if(x<=0){

        x = 0
        
        }else{
        
        x = x-1;
        
        }
        
        database.ref('/').update({Food:x})
        



}








}


}
