const DailyWeather = props =>{
    return (
        <div className="custom-card">
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
                    Maxima temp: {props.max_temp} °C
                </p>
            </div>
            <div>
                <p>
                    Minima temp: {props.min_temp} °C
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