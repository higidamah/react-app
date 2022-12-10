import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    const[weatherData, setweatherData] =useState({ready:false});
    const[city, setCity]= useState(props.defaultCity)
    function handleResponse(response){
        setweatherData({
            ready:true,
            temperature:response.data.temperature.current,
            humidity:response.data.temperature.humidity,
            description: response.data.condition.description,
            wind:response.data.wind.speed,
            city:response.data.city,
            iconurl:response.data.condition.icon_url,
            date: new Date(response.data.time*1000),
            
         });
    }
    function search(){
        const apikey= "6bat462c9e0302211ca1f678ed1o43af";
    let apiurl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiurl).then(handleResponse);

    }
    function handleSubmit(event){
        event.preventDefault();
        search();
        }

    function handleCityChange(event){
        setCity(event.target.value);
      }

    if(weatherData.ready){
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                        <input
                         type="search"
                          placeholder="Enter a city..." 
                          className="form-control" 
                          autoFocus="on"
                          onChange={handleCityChange}
                          />
                        </div>
                        <div className="col-3">
                        <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-primary w-100"/>
                        </div>
                    </div>
                    
                 </form>
                 <WeatherInfo data={weatherData}/>
                
                 </div>
        );
     }else{
        search();
        return "Loading...";

     }
    
    

}