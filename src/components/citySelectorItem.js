import React, {useState} from 'react'

const ciudades = [
    {
        "pais": "Venezuela",
        "ciudades": ["Maracay", "Valencia", "Caracas"]
    },
    {
        "pais": "Argentina",
        "ciudades": ["Buenos Aires", "Cordova"]
    },
    {
        "pais": "Colombia",
        "ciudades": ["Medellin", "Cartagena"]
    },
    {
        "pais": "España",
        "ciudades": ["Madrid", "Sevilla", "Barcelona"]
    }
]

const CitySelectorItem = props=>{
    const [idCiudades,setIdCiudades] = useState(-1)

    const handlerCargarCiudades = function (event){
        const option = event.target.value;
        setIdCiudades(option)
    }
    return (
        <form onSubmit={props.getWeather}>
        <div className= "card card-body">
            <div className="container">
                    <div className="row mt-3">
                            <div className="col-2 offset-3 mt-2">
                                <label>
                                    País:
                                </label>  
                            </div>
                            <div className="col-5 mx-auto" >
                                <select name="idcountry" id="setCountry" className="form-select mb-3" onClick={handlerCargarCiudades} arial-label="pais">
                                    <option value={-1}>Escoge un pais</option>
                                    {
                                        ciudades.map((pais,id)=>(
                                            <option className="dropdown" key={"pais"+id} value={id}>{pais.pais}</option>
                                        ))
                                    }
                                </select>
                            </div>
                    </div>
                    <div className="row mt-3">
                            <div className="col-2 offset-3 mt-2">
                                <label >Ciudad:
                                </label>
                            </div>
                            <div className="col-5 mx-auto">
                                <select name="city" id="setCity" className="form-select">
                                    <option value={"null"}>Escoge una ciudad</option>
                                    {
                                        idCiudades > -1 &&
                                        (
                                            ciudades[idCiudades].ciudades.map((ciudad,i)=>(
                                                <option key={"ciudad"+i} value={ciudad}>{ciudad}</option>
                                            ))
                                        )
                                    }
                                </select>
                            </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6 mx-auto mt-3">
                            <button className="btn btn-light">Obtener pronostico</button>
                        </div>
                    </div>
            </div>
        </div>
        </form>
    )
}

export default CitySelectorItem