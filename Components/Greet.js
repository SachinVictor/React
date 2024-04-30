
// function Greet(props)
// {

//     return <h1>Hello World {props.firstName} {props.lastName}</h1>
// }

// export default Greet;

// or


// function Greet(firstName,lastName)
// {

//     return <h1>Hello World {firstName} {lastName}</h1>
// }

// export default Greet;


// or 

function Greet(props)
{
    const {firstName,lastName} = props;
    return <h1>Hello World {firstName} & {lastName}</h1>
}

export default Greet;
