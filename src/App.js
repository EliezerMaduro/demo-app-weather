import './App.css';
import CitySelectorItem from './components/citySelectorItem';
import WeatherData from './components/WeatherData';
import React from 'react';
import { WEATHER_KEY } from './keys';
import WeeklyWeater from './components/WeeklyWeather';

class App extends React.Component {

  state ={
    current_weather: {
      date: "",
      temperature: "",
      description: "",
      humidity: "",
      wind_speed: "",
      feels_like: ""
    },
    current_day: {
      date: "",
      temperature_max: "",
      temperature_min: "",
      description: "",
      humidity: "",
      wind_speed: "",
      feels_like: ""
    },
    second_day: {
      date: "",
      temperature_max: "",
      temperature_min: "",
      description: "",
      humidity: "",
      wind_speed: "",
      feels_like: ""
    },
    third_day: {
      date: "",
      temperature_max: "",
      temperature_min: "",
      description: "",
      humidity: "",
      wind_speed: "",
      feels_like: ""
    },
    fourth_day: {
      date: "",
      temperature_max: "",
      temperature_min: "",
      description: "",
      humidity: "",
      wind_speed: "",
      feels_like: ""
    },
    fifth_day: {
      date: "",
      temperature_max: "",
      temperature_min: "",
      description: "",
      humidity: "",
      wind_speed: "",
      feels_like: ""
    },
    sixth_day:{
      date: "",
      temperature_max: "",
      temperature_min: "",
      description: "",
      humidity: "",
      wind_speed: "",
      feels_like: ""
    },
    error: null,
    user_location: {
      latitude: "",
      longitude: ""
    },
    city: "",
    country: ""
  }

  successCallbak = (position) =>{
    let copyLocation = { ...this.state.user_location,
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude}
    this.setState({
      user_location: copyLocation
    })
  }

  errorCallback=()=>{}


  getUserLocation = ()=>{
    return navigator.geolocation.getCurrentPosition(this.successCallbak,this.errorCallback)
  }

  getWeather = async event =>{
    event.preventDefault();
    const {city,idcountry} = event.target.elements;
    const city_value = city.value;
    const valor_idcountry = idcountry.value;

    const coords = this.getCordinates(city_value,valor_idcountry);

    const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_KEY}&units=metric&lang=${document.querySelector('html').lang}`
    
    if (coords.error===false){
      const response = await fetch(API_URL);
      const data = await response.json();

      const date_format = {day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour:'2-digit',
                          minute: '2-digit', 
                          second: '2-digit'}

      const copy_current_weather = { ...this.state.current_weather,
                                    date: new Intl.DateTimeFormat('en-US', date_format).format(data.current.dt * 1000 +data.timezone_offset).split(',')[0],
                                    temperature: data.current.temp,
                                    description: data.current.weather[0].description,
                                    humidity: data.current.humidity,
                                    wind_speed: data.current.wind_speed,
                                    feels_like: data.current.feels_like};

      const copy_current_day = { ...this.state.current_day,
                                date: new Intl.DateTimeFormat('en-US', date_format).format(data.daily[0].dt * 1000).split(',')[0],
                                temperature_max: data.daily[0].temp.max,
                                temperature_min: data.daily[0].temp.min,
                                description: data.daily[0].weather[0].description,
                                humidity: data.daily[0].humidity,
                                wind_speed: data.daily[0].wind_speed,
                                feels_like: data.daily[0].feels_like.day};
      
      const copy_second_day = {...this.state.second_day,
                              date: new Intl.DateTimeFormat('en-US', date_format).format(data.daily[1].dt * 1000).split(',')[0],
                              temperature_max: data.daily[1].temp.max,
                              temperature_min: data.daily[1].temp.min,
                              description: data.daily[1].weather[0].description,
                              humidity: data.daily[1].humidity,
                              wind_speed: data.daily[1].wind_speed,
                              feels_like: data.daily[1].feels_like.day
                            };

      const copy_third_day = {...this.state.third_day,
                              date: new Intl.DateTimeFormat('en-US', date_format).format(data.daily[2].dt * 1000).split(',')[0],
                              temperature_max: data.daily[2].temp.max,
                              temperature_min: data.daily[2].temp.min,
                              description: data.daily[2].weather[0].description,
                              humidity: data.daily[2].humidity,
                              wind_speed: data.daily[2].wind_speed,
                              feels_like: data.daily[2].feels_like.day
                            };     

      const copy_fourth_day = {...this.state.fourth_day,
                              date: new Intl.DateTimeFormat('en-US', date_format).format(data.daily[3].dt * 1000).split(',')[0],
                              temperature_max: data.daily[3].temp.max,
                              temperature_min: data.daily[3].temp.min,
                              description: data.daily[3].weather[0].description,
                              humidity: data.daily[3].humidity,
                              wind_speed: data.daily[3].wind_speed,
                              feels_like: data.daily[3].feels_like.day
                              };

      const copy_fifth_day = {...this.state.fifth_day,
                              date: new Intl.DateTimeFormat('en-US', date_format).format(data.daily[4].dt * 1000).split(',')[0],
                              temperature_max: data.daily[4].temp.max,
                              temperature_min: data.daily[4].temp.min,
                              description: data.daily[4].weather[0].description,
                              humidity: data.daily[4].humidity,
                              wind_speed: data.daily[4].wind_speed,
                              feels_like: data.daily[4].feels_like.day
                            }

      const copy_sixth_day = {...this.state.sixth_day,
                              date: new Intl.DateTimeFormat('en-US', date_format).format(data.daily[5].dt * 1000).split(',')[0],
                              temperature_max: data.daily[5].temp.max,
                              temperature_min: data.daily[5].temp.min,
                              description: data.daily[5].weather[0].description,
                              humidity: data.daily[5].humidity,
                              wind_speed: data.daily[5].wind_speed,
                              feels_like: data.daily[5].feels_like.day,
                            }
      this.setState({     
        current_weather: copy_current_weather,
        current_day: copy_current_day,
        second_day: copy_second_day,
        third_day: copy_third_day,
        fourth_day: copy_fourth_day,
        fifth_day: copy_fifth_day,
        sixth_day: copy_sixth_day,
        city: city_value,
        country: coords.country,
        error: null
        });

    }else {
      const copy_current_weather = {...this.state.current_weather,
                                temperature: ""
                                }
      this.setState({
        error:"Porfavor ingresa una ciudad y un pais",
        current_weather: copy_current_weather
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
    }else{
      error = true
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
    });
  };

  render(){
    return (
      <div data-testid="test-app" className="App" onLoad={this.getUserLocation()}>
        <h1>Bienvenido al pronostico del clima</h1>
          <CitySelectorItem
          getWeather={this.getWeather}
          ></CitySelectorItem>
          <WeatherData {...this.state}></WeatherData>
          <WeeklyWeater {...this.state}></WeeklyWeater>
      </div>
    );
  }
};

export default App;
