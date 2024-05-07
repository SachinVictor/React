 function add(a=2,b=1) // function which adds two numbers. Default values a=2,b=1
{
    return a+b; //return addition of two numbers
}

 function subtract(a=2,b=1) // function which subtracts two numbers. Default values a=2,b=1
{

    return a-b;
}

 function multiply(a=2,b=1) // function which adds two numbers. Default values a=2,b=1
{

    return a*b;
}
 function divide(a=2,b=1) //function which divides two numbers. Default values a=2,b=1
{
    return a/b;
}

export default function square (a=1) //named export function which gives the square of a number. Default value a=1
{
    return a*a;
}

export {add,multiply,subtract,divide}; //export functions 