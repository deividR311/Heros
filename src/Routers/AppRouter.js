import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen } from '../Components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoutes } from './PublicRoutes';


export const AppRouter = () => {

    const { user } = useContext( AuthContext );
    console.log( user );
    return (
        <Router>
            <div>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <PublicRoutes isAuthenticated={ user.logged } exact path="/login" component={ LoginScreen } />

                    <PrivateRoutes isAuthenticated={ user.logged } path="/" component={ DashboardRoutes }></PrivateRoutes>
                </Switch>
            </div>
        </Router>
    )
}
