//define a post list class compontent to fetch data from JSON Placeholder API and display the list of post

import React,{ Component} from "react";

class PostList extends Component
{
 constructor()
 {
    super();
    this.state={
        post : [],
        loading : true,
        error : ""
    }

 }

    componentDidMount()
    {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response)=> 
        {
            if (response.ok)
            {
                return response.json();
            }
            throw new Error("Error during Processing");

        }
        
        )
        .then((data)=> {
            console.log(data);            
            this.setState({post:data});
            // this.state.post(data);
            // post=this.state.data;
            this.setState({loading:false});

        }
    )
    .catch((error) => {

        console.log(error);
        this.setState({loading:false});
        this.setState({error: "Error During Transaction"});
    })


    }

    

if(loading)
{
   return <h1>Loading.... Change your Wifi connection</h1>
}

if(error)
{
 return <h1>this.state.error</h1>
}

render(){
return (
<div>
    <h1>Posts</h1>
<ul>{this.state.post.map((post)=>(
<li key={post.userId}>{post.title}</li>
))

}</ul>
</div>

)
}
}


export default PostList;