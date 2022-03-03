var number = 20;
var display = function(){
    console.log(number);
    var number = 10;
    console.log(number);
}
display();
console.log(number);