const jonas = {
    name1 : 1,
    some1 : console.log(this),
    some2 : function(){
        console.log(this)
    }
}
console.log("PRIMERO ES ESTE")
console.log(jonas.some1)
console.log("-"*50)
console.log("PRIMERO ES ESTE2222")
console.log(jonas.some2)
console.log("PRIMERO ES ESTE33333")
