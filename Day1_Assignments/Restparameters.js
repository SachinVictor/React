//function `sumAll` that uses a rest parameter to take any number of arguments and returns their sum.
//...Args rest parameter passed as input to a function
function sumAll(...Args) {
    let total = 0;
    for (let i of Args) {
      total += i;
    }
    return total;
  }
  
  console.log(sumAll(1, 2, 3));
  
  console.log(sumAll(1, 2, 3, 4));

//function `userInfo` that accepts a first name, last name, and a rest parameter for hobbies
//...rest is the rest parameter passed as input to userInfo function
  function userInfo(firstName,lastName,...rest)
  {
    let array1 = [rest]; //Assigning the rest parameter values to array 1

    let obj1 = {
        name: firstName+" "+lastName,
        hobbies : array1
    }

    console.log(obj1);
  }

  userInfo("Sam","Wilson","Tennis","Cricket","Football");