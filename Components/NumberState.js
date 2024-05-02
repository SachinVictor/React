import React,{useState} from "react";

function NumberState()
{
let [Number, setNumber]=useState(0);

function increment()
{
    setNumber(Number+1);
    console.log(Number);
}

function reset()
{

    setNumber(0);
    console.log(Number);

}

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