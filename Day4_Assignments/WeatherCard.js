import {useState} from "react"

function WeatherCard(props){
return (
                 
                 <div> 
                  <h1>{props.day}</h1>
                  <h2>{props.condition}</h2>
                  <h3>{props.temperature}</h3>
                  </div>

);

}


export default WeatherCard;