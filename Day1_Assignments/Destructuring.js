
//Create fruit array
const fruits = ["Apple", "Banana", "Cherry"];
[a,b,c] = fruits; //Using destructing to extract and assign values to variables

console.log(a);
console.log(b);


const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
   };

//Destructure to extract the `firstName`, `lastName`, and `email`
 const {firstName,lastName,age,email} = user;
 
 console.log(firstName);
 console.log(lastName);
 console.log(email);


const address={
    street:"Marks Street",
    city : "New york"
}
 
//creating a new object by merging user and address. and extracting the street and city 
let useraddress ={...user,...address}

console.log(useraddress.street);
console.log(useraddress.city);

//function that takes an object as a parameter and uses destructuring to extract `firstName` and `email` from it.

function getUserDetails({firstName:firstname,email:email})
{
    console.log(`User's name is ${firstname}`);
    console.log(`User's email is ${email}`)
}

getUserDetails(user);

