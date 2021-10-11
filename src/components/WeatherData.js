const WeatherData = props =>{
    console.log(props)
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                <div>
                    <h2>
                        {props.city + ", " + props.country}
                    </h2>
                    <div className="card card-body card-custom">
                        <h3>Clima actual</h3>
                        <p>
                            Fecha: {props.date}
                        </p>
                        <p>
                            Descripcion: {props.description}
                        </p>
                        <p>
                            Temperatura: {props.temperature} °C
                        </p>
                        <p>
                            Humedad: {props.humidity} %
                        </p>
                        <p>
                            Sensación Termica: {props.feels_like} °C
                        </p>
                        <p>
                            Velocidad del viento: {props.wind_speed} km/h
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