import React,{useState} from "react"; //Import React and useState hook

function NumberState()
{
//useState hook to initialize a state variable called `number` with a starting value of `0`
let [Number, setNumber]=useState(0);

//Function to increment the count
function increment()
{
    setNumber(Number+1);
    console.log(Number);
}

//Function to reset the count to 0
function reset()
{

    setNumber(0);
    console.log(Number);

}
//function to decrement the count
function decrement()
{
    setNumber(Number - 1);
    console.log(Number);

}

return (
<div>
 <h1>{Number}</h1>
<button onClick={increment}>Increment</button>
<br></br>
<button onClick={decrement}>Decrement</button>
<br></br>
<button onClick={reset}>Reset</button>
</div>

)

}


export default NumberState;