import { useState } from "react"
import axios from "axios"

function Weather()
{
    const [city,setcity] = useState("")
    const [weather,setweather] = useState("")
    const[temp,settemp] = useState("")
    const [desc,setdesc]= useState("")

    function handleCity(event)
    {
        setcity(event.target.value)
    }

    function handleWeather()
    {
       var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af6329406ad210f3bad1137f8bffe63e` )
       
       weatherData.then(function(wData)
    {
        console.log(wData.data)

        setweather(wData.data.weather[0].main)
        settemp(wData.data.main.temp)
        setdesc(wData.data.weather[0].description)
        
    })
    }
    return(
        <div className="container">
            <div className="card"> 
                <h1>Weather Report</h1>
                <p>Can give you a weather report about you city!</p>
                <input placeholder="enter city name" onChange={handleCity} type="text" /><br />
                <button onClick={handleWeather}>Get Report</button>

                <div>
                    <p>Weather : {weather}</p>
                    <p>Temperature : {temp} </p>
                    <p>Description : {desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;