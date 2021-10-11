import './App.css';
import CitySelectorItem from './components/citySelectorItem';
import WeatherData from './components/WeatherData';
import React from 'react';
import { WEATHER_KEY } from './keys';
import WeeklyWeater from './components/WeeklyWeather';

/*
const mapURL= `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials}`;
<Map
    googleMapURL= {mapURL}
    containerElement= {<div style={{height: '409px'}}/>}
    mapElement= {<div style={{height: '100%'}}/>}
    loadingElement= {<p> Cargando</p>}
  />
*/

class App extends React.Component {

  state ={
    date: "",
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    feels_like: "",
    city: "",
    country: "",
    currentDate: "",
    currentTemperatureMax: "",
    currentTemperatureMin: "",
    currentDescription: "",
    currentHumidity: "",
    currentWind_speed: "",
    currentFeels_like: "",
    secondDate: "",
    secondTemperatureMax: "",
    secondTemperatureMin: "",
    secondDescription: "",
    secondHumidity: "",
    secondWind_speed: "",
    secondFeels_like: "",
    thirdDate: "",
    thirdTemperatureMax: "",
    thirdTemperatureMin: "",
    thirdDescription: "",
    thirdHumidity: "",
    thirdWind_speed: "",
    thirdFeels_like: "",
    fourthDate: "",
    fourthTemperatureMax: "",
    fourthTemperatureMin: "",
    fourthDescription: "",
    fourthHumidity: "",
    fourthWind_speed: "",
    fourthFeels_like: "",
    fifthDate: "",
    fifthTemperatureMax: "",
    fifthTemperatureMin: "",
    fifthDescription: "",
    fifthHumidity: "",
    fifthWind_speed: "",
    fifthFeels_like: "",
    sixthDate: "",
    sixTemperatureMax: "",
    sixTemperatureMin: "",
    sixthDescription: "",
    sixthHumidity: "",
    sixthWind_speed: "",
    sixthFeels_like: "",
    error: null,
  }

  getWeather = async event =>{
    event.preventDefault()
    const {city,idcountry} = event.target.elements
    const city_value = city.value
    const valor_idcountry = idcountry.value

    let coords = this.getCordinates(city_value,valor_idcountry)

    const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_KEY}&units=metric&lang=${document.querySelector('html').lang}`
    
    if (coords.error===false){
      const response = await fetch(API_URL)
      const data = await response.json()
      this.setState({                  // object that we want to update    // keep all other key-value pairs
            date: new Intl.DateTimeFormat('en-US', {day: '2-digit', month: '2-digit', year: 'numeric',hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data.current.dt * 1000 +data.timezone_offset).split(',')[0],
            temperature: data.current.temp,
            description: data.current.weather[0].description,
            humidity: data.current.humidity,
            wind_speed: data.current.wind_speed,
            feels_like: data.current.feels_like,
            currentDate: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data.daily[0].dt * 1000).split(',')[0],
            currentTemperatureMax: data.daily[0].temp.max,
            currentTemperatureMin: data.daily[0].temp.min,
            currentDescription: data.daily[0].weather[0].description,
            currentHumidity: data.daily[0].humidity,
            currentWind_speed: data.daily[0].wind_speed,
            currentFeels_like: data.daily[0].feels_like.day,
            secondDate: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data.daily[1].dt * 1000).split(',')[0],
            secondTemperatureMax: data.daily[1].temp.max,
            secondTemperatureMin: data.daily[1].temp.min,
            secondDescription: data.daily[1].weather[0].description,
            secondHumidity: data.daily[1].humidity,
            secondWind_speed: data.daily[1].wind_speed,
            secondFeels_like: data.daily[1].feels_like.day,
            thirdDate: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data.daily[2].dt * 1000).split(',')[0],
            thirdTemperatureMax: data.daily[2].temp.max,
            thirdTemperatureMin: data.daily[2].temp.min,
            thirdDescription: data.daily[2].weather[0].description,
            thirdHumidity: data.daily[2].humidity,
            thirdWind_speed: data.daily[2].wind_speed,
            thirdFeels_like: data.daily[2].feels_like.day,
            fourthDate: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data.daily[3].dt * 1000).split(',')[0],
            fourthTemperatureMax: data.daily[3].temp.max,
            fourthTemperatureMin: data.daily[3].temp.min,
            fourthDescription: data.daily[3].weather[0].description,
            fourthHumidity: data.daily[3].humidity,
            fourthWind_speed: data.daily[3].wind_speed,
            fourthFeels_like: data.daily[3].feels_like.day,
            fifthDate: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data.daily[4].dt * 1000).split(',')[0],
            fifthTemperatureMax: data.daily[4].temp.max,
            fifthTemperatureMin: data.daily[4].temp.min,
            fifthDescription: data.daily[4].weather[0].description,
            fifthHumidity: data.daily[4].humidity,
            fifthWind_speed: data.daily[4].wind_speed,
            fifthFeels_like: data.daily[4].feels_like.day,
            sixthDate: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data.daily[5].dt * 1000).split(',')[0],
            sixTemperatureMax: data.daily[5].temp.max,
            sixTemperatureMin: data.daily[5].temp.min,
            sixthDescription: data.daily[5].weather[0].description,
            sixthHumidity: data.daily[5].humidity,
            sixthWind_speed: data.daily[5].wind_speed,
            sixthFeels_like: data.daily[5].feels_like.day,
            city: city_value,
            country: coords.country,
            error: null  // update the value of specific key
        });
    }else {
      this.setState({
        error:"Porfavor ingresa una ciudad y un pais",
        temperature: ""
      })
    }
  }


  getCordinates = (city,idcountry)=>{
    let lat
    let lon
    let error = false
    let country

    if (idcountry==='0'){
      country = 'Venezuela'
    }else if (idcountry==='1'){
      country = 'Argentina'
    }else if (idcountry==='2'){
      country = 'Colombia'
    }else if (idcountry==='3'){
      country = 'España'
    }

    if (city==='Maracay'){
      lat = 10.23535
      lon = -67.59113
    }else if(city==='Valencia'){
      lat = 10.1741
      lon = -67.9998
    }else if(city==='Caracas'){
      lat = 10.491
      lon = -66.902
    }else if(city==='Buenos Aires'){
      lat = -34.61315
      lon = -58.37723
    }else if(city==='Cordova'){
      lat = 31.417
      lon = -64.183
    }else if(city==='Medellin'){
      lat = 6.217
      lon = -75.567
    }else if(city==='Cartagena'){
      lat = 10.39972
      lon = -75.51444
    }else if(city==='Madrid'){
      lat = 40.4165
      lon = -3.70256
    }else if(city==='Sevilla'){
      lat = 37.3826
      lon = -5.99629
    }else if(city==='Barcelona'){
      lat = 41.3879
      lon = 2.16992
    }else{
      error = true
    }

    return({
      lat: lat,
      lon: lon,
      error: error,
      country: country
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Bienvenido al pronostico del clima</h1>
            <CitySelectorItem
            getWeather={this.getWeather}
            ></CitySelectorItem>
            <WeatherData {...this.state}></WeatherData>
            <WeeklyWeater {...this.state}></WeeklyWeater>
      </div>
    );
  }
}

export default App;
