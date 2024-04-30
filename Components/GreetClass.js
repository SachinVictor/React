import React, {Component} from 'react';

// class GreetClass extends Component {
//         render()
//         {
//             return <h1>Hello World from Class {this.props.firstName} {this.props.lastName}</h1>
//         }

// }

// export default GreetClass;


// or 
// Destructure 

class GreetClass extends Component {
    render()
    {
        const {firstName,lastName} = this.props;
        return <h1>Hello World from Class {firstName} {lastName}</h1>
    }

}

export default GreetClass;