//Explore and explain the various methods in console function. Explain them.

//console.log() method: Mainly used to log(print) the output to the console.

console.log('hello');
console.log(1);
console.log(true);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2, c: 3 });
console.log(null);
console.log(undefined);

//console.error() method: Used to log error message to the console. Useful in testing of code.

console.error('This is a error');

//console.warn() method: Used to log warning message to the console.

console.warn('This is a warning');

//console.error() method: Used to clear the console.

console.clear();

/*console.time() and console.timeEnd() method: Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the javascript console object. */

console.time('abc');
let fun = function () {
 console.log('fun is running');
}
let fun2 = function () {
 console.log('fun2 is running..');
}
fun();
fun2();
console.timeEnd('abc');

/*console.table() method: This method allows us to generate a table inside a console.*/

console.table({ 'a': 1, 'b': 2 });

/*console.group() and console.groupEnd() method: group() and groupEnd() methods of the console object allows us to group contents in a separate block, which will be indented*/

console.group('simple');
console.warn('warning!');
console.error('error here');
console.log('vivi vini vici');
console.groupEnd('simple');
console.log('new section');

/*console.count() method: This method is used to count the number that the function hit by this counting method.*/

for (let i = 0; i < 5; i++) {
 console.count(i);
}