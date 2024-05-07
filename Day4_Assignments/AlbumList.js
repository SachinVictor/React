import {useState,useEffect} from "react"; //Import useState and useEffect 

const AlbumList = () => {
//Using  `useState` hook to set up state variables for `albums`, `isLoading`, and `error`.
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

//Using useEffect to fetch the response when Component mounts
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response)=>{
            if (response.ok)
                {
                    return(response.json());

                }
            throw new Error("Error during Processing");   


        } )
        .then((data)=> {

            console.log(data);
            setAlbums(data);
            setIsLoading(false);

        })
        .catch((error) => {

            console.log(error);
            setIsLoading(false);
        })


    },[]
    )
    //When the data is not returned yet the isloading variable will be true hence displaying Loading Albums....
    if(isLoading)
    {
        return <h1>Loading Albums.....</h1>
    }

    if(error)
    {
        return <h1>error</h1>
    }

    return (
<div>
<ul>
 {albums.map(album => (
 <li key={album.id}>{album.title}</li>
 ))}
 </ul>


</div>


    )

}


export default AlbumList;