var b = 11;
var obj = {
    b:13,
    get:function(){
        return b;
    }
}
var get = obj.get;
console.log(get());