//create two arrays array 1 and array 2

let array1 = [0,1,2,4,5];
let array2 = [10,4,5];

// creating new array which merges the two arrays using spread operator
let combinedarray = [...array1,...array2];
console.log(combinedarray);

//Adding new element to the begining, middle and end of the new array 
combinedarray = [0,...array1,12,...array2,14];

console.log(combinedarray);


//Two objects, `object1` and `object2`, each with at least three properties
let object1 = {
    name : "Sam",
    age: 32,
    street :"St Marks Road"
}

let object2 = {
    gender : "M",
    email: "abc@abc.com",
    street :"St Thomas Road"
}

//Create new object which combines both object1 and object 2 using spread operator
let combinedObject = {...object1,...object2};

console.log(combinedObject);

combinedObject = {...object1,...object2,phone:"55555"};

console.log(combinedObject);


// function `sum` that takes three arguments and returns their sum.
function sum(x,y,z)
{
   return x+y+z;
}

var numbers =[0,1,3];

//Calling `sum` function, passing the elements of `numbers` as arguments using the spread operator.
var result = sum(...numbers);
console.log(result);