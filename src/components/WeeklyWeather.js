import React from 'react'
import DailyWeather from "./DailyWeather"

const WeeklyWeater = props =>{
    return(
        <div>
            {
            props.current_weather.temperature ?
            <div>    
                <div className="weekly-forecast">
                    <div className="container container-custom">
                        <h2>Durante esta semana</h2>
                        <div className="row">
                            <div className="col-4">
                                <DailyWeather {...props.current_day}></DailyWeather>
                            </div>
                            <div className="col-4">
                                <DailyWeather {...props.second_day}></DailyWeather>
                            </div>
                            <div className="col-4">
                                <DailyWeather {...props.third_day}></DailyWeather>
                            </div>
                        </div>
                        <div className="row week-separator">
                            <div className="col-4">
                                <DailyWeather {...props.fourth_day}></DailyWeather>
                            </div>
                            <div className="col-4">
                                <DailyWeather {...props.fifth_day}></DailyWeather>
                            </div>
                            <div className="col-4">
                                <DailyWeather {...props.sixth_day}></DailyWeather>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div>
                
            </div>
        }

        </div>

    )
}

export default WeeklyWeater