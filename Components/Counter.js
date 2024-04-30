import {useState} from "react";

function Counter()
{
let [count, setCount]=useState(0);
// let [user,setName] =useState("Sanjay");

function incrementCounter()
{
    setCount(count+1);
    console.log(count);
}

function resetCounter()
{

    setCount(0);
    console.log(count);

}

function presetDefault()
{
    setCount(10);
    console.log(count);

}

// function updateUser()
// {
//     setName="Mark";
//     // setUser({name:setName,...user});
//     console.log(user);
//     console.log(setName);
// }

return (
<div>
 <h1>{count}</h1>
<button onClick={incrementCounter}>Increment</button>
<br></br>
<button onClick={resetCounter}>Reset</button>
<br></br>
<button onClick={presetDefault}>Default</button>
<br></br>
{/* <button onClick={updateUser}>updateUser</button> */}
</div>

)

}


export default Counter;