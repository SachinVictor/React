import { useState } from "react";
 
function User() {
    let [user, setUser] = useState({
        name: "Sanjay",
        age: 30,
        salary: 10000,
        married: true
    });

    function updateAge()
    {
        setUser({...user,age:user.age+1});
    }

    function updateName()
    {
        
        setUser({...user,name:"Mark"});
        console.log(user);
        // console.log(setName);
    }

 
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.salary}</h1>
            <h1>{user.married ? "Married" : "Single"}</h1>
            <button onClick={updateAge}>Update Age</button>
            <br></br>
            <button onClick={updateName}>Update Name</button>
        </div>
    );
 
}
 
export default User;
