console.log("sing.js loaded");

let bottlesOfBeer = function(){
  let bottles = 100;
  while (bottles != 0){
  console.log(bottles + " bottles of beer on the wall!");
  console.log(bottles + " bottles of beer!");
  console.log("Take one down, pass it around, " + bottles-- + " bottles of beer on the wall");
  //bottles--;
  //console.log(bottles + " bottles of beer on the wall!");
}};
bottlesOfBeer();
