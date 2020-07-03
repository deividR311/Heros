import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


export const PublicRoutes = ({
    isAuthenticated,
    component: Component,
    //esto es el resto de las propiedades de una ruta (exact path ...)
    ...rest
}) => {
    return (
        <Route {...rest}
            //... esto es para obtener todas las propiedades del props (match, history, location ...)
            component={(...props) => (
                (!isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/" />)
            )}
        />
    )
}

PublicRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}