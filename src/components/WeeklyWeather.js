import DailyWeather from "./DailyWeather"

const WeeklyWeater = props =>{
    const currentDay = {
        date: props.currentDate,
        description: props.currentDescription,
        max_temp: props.currentTemperatureMax,
        min_temp: props.currentTemperatureMin,
        humidity: props.currentHumidity,
        feels_like: props.currentFeels_like,
        wind_speed: props.currentWind_speed
    }
    const firstDay = {
        date: props.secondDate,
        description: props.secondDescription,
        max_temp: props.secondTemperatureMax,
        min_temp: props.secondTemperatureMin,
        humidity: props.secondHumidity,
        feels_like: props.secondFeels_like,
        wind_speed: props.secondWind_speed
    }
    const secondDay = {
        date: props.thirdDate,
        description: props.thirdDescription,
        max_temp: props.thirdTemperatureMax,
        min_temp: props.thirdTemperatureMin,
        humidity: props.thirdHumidity,
        feels_like: props.thirdFeels_like,
        wind_speed: props.thirdWind_speed
    }
    const thirdDay = {
        date: props.fourthDate,
        description: props.fourthDescription,
        max_temp: props.fourthTemperatureMax,
        min_temp: props.fourthTemperatureMin,
        humidity: props.fourthHumidity,
        feels_like: props.fourthFeels_like,
        wind_speed: props.fourthWind_speed
    }

    const fourthDay = {
        date: props.fifthDate,
        description: props.fifthDescription,
        max_temp: props.fifthTemperatureMax,
        min_temp: props.fifthTemperatureMin,
        humidity: props.fifthHumidity,
        feels_like: props.fifthFeels_like,
        wind_speed: props.fifthWind_speed
    }

    const fifthDay = {
        date: props.sixthDate,
        description: props.sixthDescription,
        max_temp: props.sixthTemperatureMax,
        min_temp: props.sixthTemperatureMin,
        humidity: props.sixthHumidity,
        feels_like: props.sixthFeels_like,
        wind_speed: props.sixthWind_speed
    }
    return(
        <div>
            {
            props.temperature ?
            <div>    
                <div className="weekly-forecast">
                    <div className="container container-custom">
                        <h2>Durante esta semana</h2>
                        <div className="row">
                            <div className="col-4">
                                <DailyWeather {...currentDay}></DailyWeather>
                            </div>
                            <div className="col-4">
                                <DailyWeather {...firstDay}></DailyWeather>
                            </div>
                            <div className="col-4">
                                <DailyWeather {...secondDay}></DailyWeather>
                            </div>
                        </div>
                        <div className="row week-separator">
                            <div className="col-4">
                                <DailyWeather {...thirdDay}></DailyWeather>
                            </div>
                            <div className="col-4">
                                <DailyWeather {...fourthDay}></DailyWeather>
                            </div>
                            <div className="col-4">
                                <DailyWeather {...fifthDay}></DailyWeather>
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