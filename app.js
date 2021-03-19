//https://www.youtube.com/watch?v=zQRrXTSkvfw
//https://www.youtube.com/watch?v=bOYFJrbSFsQ&list=PL9ooVrP1hQOHDHAMA5egjL5MrbnNIuJqZ
//edureka!
//Thapa Technical

console.log("Test");
console.log(5 + 5);



//Compare just the value
var age1=30
var age2=30
var result = age1 == age2;
console.log(result);

//Compare the value & data type
var age1=30
var age2= '30'
var result = age1 === age2;
console.log(result);

//Function with a name
function display_Name(fname, lname)
{
    console.log(fname + ' ' + lname);
}
//Invoking the function
display_Name("Prasad", "Kulkarni");

//Function without a name (Anonymousfunction)
var display_Name =function (fname, lname)
{
    console.log(fname + ' ' + lname);
}
//Invoking the function
display_Name("Prasad", "RK");

//Objects
var student = {
    name: 'Prasad',
    address: 'Mumbai'
};
console.log(student.name + " " + student.address);






//OS Information
var os = require('os');
console.log('OS is ' + os.type());
console.log('Platform ' + os.platform());
console.log('Arch ' + os.arch());

// npm install minify --save-dev
//Dev dependencies for dev. only and shd not go to prod
//save command is to save where

//To update all dependencies
//npm update

//To update just one dependecy to latest version
//npm update chalk

//To initialize node package.json
//npm init

// npm install -g : Here -g means global.
// Module will be installed and available at any cmd path location
// and not just for this directory.