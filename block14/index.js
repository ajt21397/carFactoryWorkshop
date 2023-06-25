//Only Odds

//Expected answer: [ 11, 15]
const array1 = [2, 4, 6, 8, 11, 20, 15, 22]; //initalized my array
const newArray1 = []; // initalized my new array to contain only the odd numbers
for(let i =0; i < array1.length; i++){ // going through the array one at a time starting  at index 0, stopping at the end, incrementing by 1
    if(array1[i] %2 === 1){ // if the element is divisble by 2 but has a remainder of 1 then its odd
        newArray1.push(array1[i]); //if the if statment is true then it pushes(adds) those numbers to the new array, one by one
    }
}
console.log(newArray1); //finally outputted the new array onto console/ I repeated these steps for the rest of them

//expected answer: [1, 3, 5, 7, 9]
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray2 = [];
for(let i =0; i < array2.length; i++){
    if(array2[i] %2 === 1){
        newArray2.push(array2[i]);
    }
}
console.log(newArray2);

//expected results: [55, 81, 21, 91]
const array3 = [70, 42, 55, 81, 21, 91, 34];
const newArray3 = [];
for(let i =0; i < array3.length; i++){
    if(array3[i] %2 === 1){
        newArray3.push(array3[i]);
    }
}
console.log(newArray3);

//expected results: [11]
const array4 = [2, 4, 6, 8, 10, 11, 12];
const newArray4 = [];
for(let i =0; i < array4.length; i++){
    if(array4[i] %2 === 1){
        newArray4.push(array4[i]);
    }
}
console.log(newArray4);

//break for other tab
console.log('\n');

//Vowel versus Consonant

//expected result: "hello has 3 consonants and 2 vowels"
const wordArray1 = "hello"; //I initalized my array
let vowels1=0, consonant1=0; //I initialized my counters for both vowels and consonants
for(let i =0; i < wordArray1.length; i++){
    if(wordArray1[i] === 'a' || wordArray1[i] === 'e' || wordArray1[i] === 'i' || wordArray1[i] === 'o' || wordArray1[i] === 'u'){
        vowels1++; //if the number in the array equaled a vowel it make the vowels counter increment up by 1
    }else{
        consonant1++; //otherwise the consonant counter will go up by 1 / I repeated these steps for the rest
    }
}

console.log(wordArray1 + ' has ' + consonant1 + ' consonants and ' + vowels1 + ' vowels.')

//expected result: "ukelele has 3 consonants and 4 vowels"
const wordArray2 = "ukelele";
let vowels2=0, consonant2=0;
for(let i =0; i < wordArray2.length; i++){
    if(wordArray2[i] === 'a' || wordArray2[i] === 'e' || wordArray2[i] === 'i' || wordArray2[i] === 'o' || wordArray2[i] === 'u'){
        vowels2++;
    }else{
        consonant2++;
    }
}
console.log(wordArray2 + ' has ' + consonant2 + ' consonants and ' + vowels2 + ' vowels.')

//expected results : "awesome has 3 consonants and 4 vowels"
const wordArray3 = "awesome";
let vowels3=0, consonant3=0;
for(let i =0; i < wordArray3.length; i++){
    if(wordArray3[i] === 'a' || wordArray3[i] === 'e' || wordArray3[i] === 'i' || wordArray3[i] === 'o' || wordArray3[i] === 'u'){
        vowels3++;
    }else{
        consonant3++;
    }
}
console.log(wordArray3 + ' has ' + consonant3 + ' consonants and ' + vowels3 + ' vowels.')

//expected results : "onomatopoeia has 4 consonants and 8 vowels"
const wordArray4 = "onomatopoeia";
let vowels4=0, consonant4=0;
for(let i =0; i < wordArray4.length; i++){
    if(wordArray4[i] === 'a' || wordArray4[i] === 'e' || wordArray4[i] === 'i' || wordArray4[i] === 'o' || wordArray4[i] === 'u'){
        vowels4++;
    }else{
        consonant4++;
    }
}
console.log(wordArray4 + ' has ' + consonant4 + ' consonants and ' + vowels4 + ' vowels.')


//expected results : "textbook has 5 consonants and 3 vowels"
const wordArray5 = "textbook";
let vowels5=0, consonant5=0;
for(let i =0; i < wordArray5.length; i++){
    if(wordArray5[i] === 'a' || wordArray5[i] === 'e' || wordArray5[i] === 'i' || wordArray5[i] === 'o' || wordArray5[i] === 'u'){
        vowels5++;
    }else{
        consonant5++;
    }
}
console.log(wordArray5 + ' has ' + consonant5 + ' consonants and ' + vowels5 + ' vowels.')


//break for the next tab
console.log('\n');


//Reverse Array

//expected result: [3, 2, 1]
const numArray1 = [1, 2, 3]; //declared my array
const revArray1 = []; //declared an empty array to hold the reverse numbers
for(let i = numArray1.length-1; i >=0; i--){ //started the for loop at the by using the length-1 then incrementing backwards --
    revArray1.push(numArray1[i]); //once the numbers were coming out had to use push to put the numbers at the end of the array otherwise it would still be in normal order
}
console.log(revArray1); //then outputted the array, I repeated these steps for the other ones below in the Reverse array section

//expected result: [11, 9, 7, 5, 3, 1]
const numArray2 = [1, 3, 5, 7, 9, 11];
const revArray2 = [];
for(let i = numArray2.length-1; i >=0; i--){
    revArray2.push(numArray2[i]);
}
console.log(revArray2);

//expected result: [200, 60, 30, 50, 20]
const numArray3 = [20, 50, 30, 60, 200];
const revArray3 = [];
for(let i = numArray3.length-1; i >=0; i--){
    revArray3.push(numArray3[i]);
}
console.log(revArray3);



//expected result: [13, -8, 5, -3, 2, -1, 1]
const numArray4 = [1, -1, 2, -3, 5, -8, 13]
const revArray4 = [];
for(let i = numArray4.length-1; i >=0; i--){
    revArray4.push(numArray4[i]);
}
console.log(revArray4);


//break for next tab
console.log('\n');


//FizzBuzz
//Create a JavaScript code that prints each number from 1 to 100 on a new line.

//For each multiple of 3, print "Fizz" instead of the number.

//For each multiple of 5, print "Buzz" instead of the number.

//For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

//creating my array to have a 100 values first with for loop
const fbArray = [];
for(let i =1; i<=100; i++){
    fbArray.push(i);
 
}

//then used another for loop to go through that array
for(let i =1; i<=100; i++){
    if(i%15 == 0){ //use the remainder operater % that if anything is divisible by 5 or 3, 15, then it will print FizzBuzz
        console.log('FizzBuzz');
    }else if(i %3 == 0){ //use the remainder operater % that if anything is divisible by 3 then it will print Fizz
        console.log('Fizz')
    } else if(i % 5 == 0){ //use the remainder operater % that if anything is divisible by 5 then it will print Buzz
        console.log('Buzz')
    } else{
        console.log(i); //otherwise it will just output the number
    }
}
