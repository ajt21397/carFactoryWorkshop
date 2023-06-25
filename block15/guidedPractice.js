//1st question
const dinner = {
    cheeseburger : 12,
    steak : 20,
    soup : 8,
    'mac and cheese' : 14,
    'unlimited soup and salad combo' : 16

} //end of dinner object

console.log(Object.keys(dinner));
console.log(Object.values(dinner));

let totalCost = 0;

for(const property in dinner){
    totalCost += dinner[property];
}

console.log(totalCost);