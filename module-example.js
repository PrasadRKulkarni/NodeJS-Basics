//Importing module
console.log("------Import Export Module------");
var add1 = require('./add1.js');
var add2 = require('./add2.js');

var z = add1.add(1,2);
console.log('Sum is ' + z);

var z = add2.add(1, 2, 3);
console.log('Sum is ' + z);