import React from 'react';

const Formulario = () => {
    return ( 
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form action="" className="col card text-white bg-transparent mb-5 pt-5 pb-2">
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