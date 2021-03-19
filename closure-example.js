//Closure example
//A closure is created when a function accesses a variable outside its immediate scope.
//A function that returns a function utilizing a value in the parent function thne it is 
//a closure


function add(x)
{
    return function (y)
    {
        return x + y;
    }
}
var add1 = add(5);

console.log(add1); //Will return a function
console.log(add1(5)); //10
console.log(add1(15)); //20
