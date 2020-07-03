import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/Types';

export const Navbar = () => {

    const { user, dispatch } = useContext( AuthContext );

    //el history normal de un componente funciona cuando el componente tiene ruta en el router
    //como este componente NavBar no tiene ruta y esta fuera del router, se hace de la siguiente manera

    //este es un hook de react que nos provee el history directamente para que podamos navegar entre componentes
    //cuando estos no esten en el router
    const history = useHistory();

    const { name = '', logged } = user;

    const handleLogOut = () => {

        history.replace('/login');
        dispatch({
            type: types.logout,
            logged: false,
            payload: {
                name: ''
            }
        })

        //replace no permite devolverse al login despues de que el usuario se loguea
        // history.replace('/');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    { name === '' &&
                        <span className="nav-item nav-link text-info">
                            Unidentified user
                        </span>
                    }
                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogOut }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}