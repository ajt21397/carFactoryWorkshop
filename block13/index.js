//is Truthy tab

//If the value is truthy, print true;
let input = 'I am a string'
if(input === 'I am a string'){
    console.log(true);
}else{
    console.log(false);
}
//If the value is falsy, print the corresponding result:
//"The boolean value false is falsy";
if(input !== 'hello'){
    console.log('The boolean value is falsey.');
}else{
    console.log('The boolean value is truthy.');
}
//"The null value is falsy";
input = null;
if(input === null){
    console.log('The null value is falsy');
}else{
    console.log('The null value is truthy.');
}
//"undefined is falsy";
let input1;
if(input1 === undefined){
    console.log("undefined is falsy");
}else{
    console.log('Undefinied is truthy.');
}
//"The number 0 is falsy (the only falsy number)";
input1 = 0;
if(input1 == false){
    console.log('The number 0 is falsy.');
}else{
    console.log('The number 0 is truthy.');
}
//"The empty string is falsy (the only falsy string)";
let inpu1 = '';
if(input1 == ''){
    console.log('The empty string is falsy.');
}else{
    console.log('The empty string is truthy.');
}

//breaking space for the next tab
console.log("\n");

/*Number Line tab
Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:*/

//sum + " is less than -1000";
let num1 = -1000, num2 = -10;
let sum = num1 + num2;
if(sum < -1000){
    console.log(sum + ' is less than -1000');
}else if(sum > -1000){
    console.log(sum + ' is greater than -1000');
}else{
    console.log('Number is zero');
}
//sum + " is a negative number";
if(sum < 0){
    console.log(sum + ' is a negative number.');
}else if(sum > 0){
    console.log(sum + ' is a postive number.');
}else{
    console.log('Number is zero');
}
//sum + " is equal to 0";
num1 = 5;
num2 = -5;
sum = num1 + num2;
if(sum === 0){
    console.log(sum + ' is equal to 0');
}else if(sum > 0){
    console.log(sum + ' is greater than 0');
}else{
    console.log(sum + ' is less than 0');
}
//sum + " is larger than 0";
num1 = 2;
num2 = 3;
sum = num1 + num2;
if(sum > 0){
    console.log(sum + ' is larger than 0.');
}else if(sum < 0){
    console.log(sum + ' is greater than -1000.');
}else{
    console.log('Number is zero.');
}
//sum + " is greater than 100";
num1 = 50;
num2 = 80;
sum = num1 + num2;
if(sum > 100){
    console.log(sum + ' is greater than 100.');
}else if(sum < 100){
    console.log(sum + ' is less than 100.');
}else{
    console.log('Number is zero');
} 

//this is the same Number line tab but now the bottom half part

//50	51	"101 is greater than 100"
num1 = 50;
num2 = 51;
sum = num1 + num2;
if(sum > 100){
    console.log(sum + ' is greater than 100.');
}else if(sum < 100){
    console.log(sum + ' is less than 100.');
}else{
    console.log('Number is zero');
} 

//99	-2	"97 is greater than 0"
num1 = 99;
num2 = -2;
sum = num1 + num2;
if(sum > 0){
    console.log(sum + ' is greater than 0.');
}else if(sum < 0){
    console.log(sum + ' is less than 0.');
}else{
    console.log('Number is zero');
} 

//0	101	"101 is greater than 100"
num1 = 0;
num2 = 101;
sum = num1 + num2;
if(sum > 100){
    console.log(sum + ' is greater than 100.');
}else if(sum < 100){
    console.log(sum + ' is less than 100.');
}else{
    console.log('Number is zero');
} 

//500	-500	"0 is equal to 0"
num1 = 500;
num2 = -500;
sum = num1 + num2;
if(sum > 100){
    console.log(sum + ' is greater than 100.');
}else if(sum < 100){
    console.log(sum + ' is less than 100.');
}else{
    console.log('Number is zero');
} 
//-1000	0	"-1000 is a negative number"
num1 = -1000;
num2 = 0;
sum = num1 + num2;
if(sum < 0){
    console.log(sum + ' is a negative number.');
}else if(sum > 0){
    console.log(sum + ' is a positive number.');
}else{
    console.log('Number is zero');
} 
//-5	0	"-5 is a negative number"
num1 = -5;
num2 = 0;
sum = num1 + num2;
if(sum < 0){
    console.log(sum + ' is a negative number.');
}else if(sum > 0){
    console.log(sum + ' is a positive number.');
}else{
    console.log('Number is zero');
} 

//breaking space for the next tab
console.log("\n");

/*Greater Than Or Equal To 5 tab
Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

Values to test:

num1	num2	Expected Print*/
//5	    6	    true
num1 = 5; 
num2 = 6;
if(num1 && num2 >= 5){
    console.log(true);
}else{
    console.log(false);
}
//10	11	    true
num1 = 10; 
num2 = 11;
if(num1 && num2 >= 5){
    console.log(true);
}else{
    console.log(false);
}
//0	    0	    false
num1 = 0; 
num2 = 0;
if(num1 && num2 >= 5){
    console.log(true);
}else{
    console.log(false);
}
//1000	-1000	false
num1 = 1000; 
num2 = -1000;
if(num1 && num2 >= 5){
    console.log(true);
}else{
    console.log(false);
}
//6	    4	    false
num1 = 6; 
num2 = 4;
if(num1 && num2 >= 5){
    console.log(true);
}else{
    console.log(false);
}
//5	    5	    true
num1 = 5; 
num2 = 5;
if(num1 && num2 >= 5){
    console.log(true);
}else{
    console.log(false);
}


//breaking space for the next tab
console.log("\n");


/*Pair and Compare tab
Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. 
Print true if at least one of the pairs is truthy.

Values to test:

param1A	param1B	param2A	param2B	Expected Print*/

//"cat"	    "cat"	6	"6"	    true
if("cat" === "cat" || 6 === "6"){
    console.log(true);
}else{
    console.log(false);
}

//"five"	5	"dog"	"dawg"	false
if("five" === 5 || "dog" === "dawg"){
    console.log(true);
}else{
    console.log(false);
}

//0	    false	"horse"	"horse"	true
if(0 === false || "horse" === "horse"){
    console.log(true);
}else{
    console.log(false);
}

//"eight"	"eight"	"ate"	"ate"	true
if("eight" === "eight" || "ate" === "ate"){
    console.log(true);
}else{
    console.log(false);
}

//11	"eleven"	"four"	"for"	false
if(11 === "eleven" || "four" === "for"){
    console.log(true);
}else{
    console.log(false);
}

//"cake"	"cake"	"pie"	"pie"	true
if("cake" === "cake" || "pie" === "pie"){
    console.log(true);
}else{
    console.log(false);
}
