/*You have been hired by a pharmaceutical startup as a junior developer. Things are busy and they need you to start right away. 
To encourage customer retention, they have been reworking their checkout system to include two different types of discounts.

Using the following criteria, your first assignment is to create the logic for their checkout system that 
returns the total cost of all refills including if the customer has a subscription and/or a coupon.

If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."  */


// Copy and paste the following customer objects into a new index.js file.

//timmy object
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

//sarah object
const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

//rocky object
const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//calculates the total cost with refills included
function totalCostRefills(priceOfRefill, numOfRefills){
    return priceOfRefill * numOfRefills;
}

//let totalCR = totalCostRefills(pricePerRefill, refills);


//function discount which takes into account a subscription discount and coupon discount
//tests all possibilities 
function Discount(totalCR, subscription, coupon){
    //if subscription is true and coupon is true
    if(subscription === true && coupon === true){
       const subCount =  totalCR - (totalCR * 0.25);
       const couponCost = subCount - 10;
       return couponCost;
       
           //if subscription is true and coupon is false

    }else if(subscription === true && coupon === false){
        subCount = totalCR - (totalCR * 0.25);
        return subCount;

            //if subscription is false and coupon is true

    } else if(subscription === false && coupon === true){
       subCount = totalCR;
       couponCost = subCount - 10;
       return couponCost;

           //if subscription is false and coupon is false

    }else if(subscription === false && coupon === false){
        return totalCR;
    }
}

//for Timmy
const timmyTotal = totalCostRefills(timmy.pricePerRefill, timmy.refills);
const timmyGrandTotal = Discount(timmyTotal, timmy.subscription, timmy.coupon);
console.log("Your grand total is : $" + timmyGrandTotal );

//for sarah
const sarahTotal = totalCostRefills(sarah.pricePerRefill, sarah.refills);
const sarahGrandTotal = Discount(sarahTotal, sarah.subscription, sarah.coupon);
console.log("Your grand total is : $" + sarahGrandTotal );

//for Rocky
const rockyTotal = totalCostRefills(rocky.pricePerRefill, rocky.refills);
const rockyGrandTotal = Discount(rockyTotal, rocky.subscription, rocky.coupon);
console.log("Your grand total is : $" + rockyGrandTotal );