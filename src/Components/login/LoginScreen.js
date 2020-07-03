import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/Types';
import { useHistory } from 'react-router-dom';

export const LoginScreen = () => {

    //este es un hook de react que nos provee el history directamente para que podamos navegar entre componentes
    //cuando estos no esten en el router
    const history = useHistory();
    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        // de esta manera traemos el parametro asignado en el localStorage
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type: types.login,
            payload: {
                name: 'David'
            }
        })

        // le pasamos lastPath que es el dato guardado en localStorage con el fin de recordar la ultima pagina
        // para cuando el usuario vuelva a hacer login
        history.replace(lastPath); //replace no permite devolverse al login despues de que el usuario se loguea

    }

    return (
        <div className="container mt-5">
            <h1> Login </h1>
            <hr />
            <button className="btn btn-primary" onClick={ handleLogin }> Login </button>
        </div>
    )
}
