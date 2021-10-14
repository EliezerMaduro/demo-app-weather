const WeatherData = props =>{
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.current_weather.temperature ?
                <div>
                    <h2>
                        {props.city + ", " + props.country}
                    </h2>
                    <div className="card card-body card-custom">
                        <h3>Clima actual</h3>
                        <p>
                            Fecha: {props.current_weather.date}
                        </p>
                        <p>
                            Descripcion: {props.current_weather.description}
                        </p>
                        <p>
                            Temperatura: {props.current_weather.temperature} °C
                        </p>
                        <p>
                            Humedad: {props.current_weather.humidity} %
                        </p>
                        <p>
                            Sensación Termica: {props.current_weather.feels_like} °C
                        </p>
                        <p>
                            Velocidad del viento: {props.current_weather.wind_speed} km/h
                        </p>
                    </div>
                </div>

                :
                <div className="card card-body">
                    <p> </p>
                </div>
            }
        </div> 
    )
}

export default WeatherData