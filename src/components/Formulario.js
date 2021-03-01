import React,{useState} from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda,guardarBusqueda] = useState({
        artista: '',
        cancion: '',
    });

    const {artista , cancion} = busqueda;

    const [error, guardarError] = useState(false);

    //funcion a cada imput para leer su contenido
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //consultar las apis
    const buscarInformacion = e =>{
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true)
            return
        }
        //todo bien pasar al componente principal
        guardarError(false);

        guardarBusquedaLetra(busqueda);
    }

    return ( 
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    <form onSubmit={buscarInformacion} className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artista</label>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="artista" 
                                            placeholder="Nombre Artista"
                                            onChange= {actualizarState}
                                            value = {artista}
                                            />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                            <label htmlFor="">Cancion</label>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                name="cancion" 
                                                placeholder="Nombre Cancion"
                                                onChange= {actualizarState}
                                                value = {cancion}
                                                />
                                        </div>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;