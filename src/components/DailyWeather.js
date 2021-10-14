const DailyWeather = props =>{
    return (
        <div data-testid="test-daily-weather" className="custom-card">
            <div>
                <p>
                    {props.date}
                </p>
            </div>
            <div>
                <p>
                    {props.description}
                </p>
            </div>
            <div>
                <p>
                    Maxima temp: {props.temperature_max} °C
                </p>
            </div>
            <div>
                <p>
                    Minima temp: {props.temperature_min} °C
                </p>
            </div>
            <div>
                <p>
                    Humedad: {props.humidity} %
                </p>
            </div>
            <div>
                <p>
                    Velocidad del viento: {props.wind_speed} km/h
                </p>
            </div>
            <div>
                <p>
                    Sensacion termica: {props.feels_like} °C
                </p>
            </div>
        </div>
    )
}

export default DailyWeather