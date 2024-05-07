//Create oscarMovies an array of objects
const oscarMovies = [
    { title: "Parasite", year: 2020, genre: "Thriller", director: "Bong Joon Ho" },
    { title: "Green Book", year: 2019, genre: "Drama", director: "Peter Farrelly" },
    { title: "The Shape of Water", year: 2018, genre: "Fantasy", director: "Guillermo del Toro" }
   ];

 //  forEach to iterate through each element within the array and log the title, index and movie. 
   oscarMovies.forEach(function(item,index,array)
   {
       console.log(`Index : ${index}, Title : ${item.title}`);
       console.log(array);
        
   }
);
//for loop to iterate through each element within the array and log the title, index and movie
for (var index = 0 ; index<oscarMovies.length;index++)
    {
        
        console.log(`Index : ${index}, Title : ${oscarMovies[index].title}`);
        console.log(`Movie : ${oscarMovies[index]}`);

    }



