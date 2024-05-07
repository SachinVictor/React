import {useState,useEffect} from "react";


const UseEffect = () => {

let [name,setName]=useState("Sam");
let [count,setCount]=useState(0);

//Function to increment count and add letter 'a' to the name
function increment()
{

    setCount(count+1);
    setName(name +="a");

} 

//useEffect with empty array
useEffect(()=> {
console.log("First Run");
console.log(name);
console.log(count);
},[])
//useEffect with no dependency
useEffect(()=> {
    console.log("Every Run");
    console.log(name);
    console.log(count);
    })
//useEffect with `name` as the dependency
useEffect(()=> {
    console.log("Name Change");
    console.log(name);
    },[name])
//useEffect with `counter` as the dependency
useEffect(()=> {
        console.log("Counter Change");
        console.log(count);
        },[count])    
//useEffect with name and counter as dependency
        useEffect(()=> {
            console.log("Name and Counter Change");
            console.log(name);
            console.log(count);
            },[name,count])          

return (
    <div>
        <h1>{name}</h1>
        <h1>{count}</h1>
<button  onClick={increment}>Increment</button>
    </div>

)
}


export default UseEffect;