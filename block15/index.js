//After an initial meeting, the management team has decided they want to collect the following information. 
//As a test case, you have your friend Jake complete the survey. Using what we know about JavaScript objects, 
//create an object labeled customer and add the following key:value pairs:
//keys	values
//firstName	"jake"
//lastName	"smith"
//email	"jaekSmih!aol.com"
//phone	undefined
//zipCode	"631"
//favoriteFlavors	32
//cupSize	"medium"
//favoriteStore	"Target"
//firstVisit	false

const customer = {
    firstName : 'jake',
    lastName : 'smith',
    email : 'jaekSmih!aol.com',
    phone : undefined,
    zipCode : '631',
    favoriteFlavors : 32,
    cupSize : 'medium',
    favoriteStore : 'Target',
    firstVisit : false
}

//You notice that Jake made some mistakes when filling out the survey. You talk to Jake and gather the correct information. 
//Modify the following properties in the customer object using bracket notation: 
//email to "Jak3Smith1992@email.com"
//phone to 3195551234
//zipCode to "63132"
//favoriteFlavors to "coffee", "strawberry", and "matcha"

//editing email, phone, zipcode, and favoriteFlavors
customer['email'] = 'Jak3Smith1992@email.com';
customer['phone'] = 3195551234;
customer['zipCode'] = '63132';
customer['favoriteFlavors'] = ['coffee', 'strawberry' , 'matcha'];


//As you review the survey draft with the management team, they have decided to remove a couple of items from the survey. 
//Delete the following properties in the customer object using the delete keyword.
//zipCode
//favoriteStore

delete customer.zipCode;
delete customer.favoriteStore;



//The management team also wants to add the following items to the survey: toppings, future flavors, and today's purchase cost. 
//You check with Jake, and he provides the other bits of information you need to add these keys. 
//Add the following key:values to the customer object using dot notation:
//toppings: "chocolate sprinkles", "wafer straws", and "gummy bears"
//futureFlavors: "mango"
//todaysPurchaseCost: 5.32

customer.toppings = ['chocolate sprinkles', 'wafer straws', 'gummy bears'];
customer.futureFlavors = 'mango';
customer.todaysPurchaseCost = 5.32;




//Before you finalize the survey, you decide to check your survey one last time. In an array, print the keys in your survey. 
//You should have the following:
//firstName
//lastName
//email
//phone
//favoriteFlavors
//cupSize
//firstVisit
//toppings
//futureFlavors
//todaysPurchaseCost

console.log(Object.keys(customer));

