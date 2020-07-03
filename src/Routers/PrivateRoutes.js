import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoutes = ({
    isAuthenticated,
    component: Component,
    //esto es el resto de las propiedades de una ruta (exact path ...)
    ...rest
}) => {


    // rest contiene todos los props del componente
    // sacamos el location.pathname para obtener la ruta de navegacion actual
    const { location } = rest;
    // de esta manera de damos un nombre a la propiedad que vamos a guardar en el localStorage (lastPath)
    // y le pasamos la propiedad location.pathname
    localStorage.setItem( 'lastPath', location.pathname );

    return (
        <Route { ...rest }
                             //... esto es para obtener todas las propiedades del props (match, history, location ...)
               component={ ( ...props ) => (
                   ( isAuthenticated )
                       ? ( <Component { ...props } /> )
                       : ( <Redirect to="/login" /> )
               )}
        />
    )
}

PrivateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
