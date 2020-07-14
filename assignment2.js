//Write the difference between var, let and const with code examples.-->

/*var declarations are globally scoped or function/locally scoped. The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window. var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function. var variables can be re-declared and updated.*/


var greeter = "hey hi";
function newFunction() {
 var hello = "hello";
}


/*let is block scoped. A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. So a variable declared in a block with let is only available for use within that block. let can be updated but not re-declared.*/


let greeting = "say Hi";
let times = 4;

if (times > 3) {
 let hello = "say Hello instead";
 console.log(hello);
}
console.log(hello)



/*Variables declared with the const maintain constant values. const declarations can only be accessed within the block they were declared. const cannot be updated or re-declared.*/


const greeting = {
 message: "say Hi",
 times: 4
}
greeting.message = "say Hello instead";