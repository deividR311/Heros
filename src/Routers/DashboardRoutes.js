import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Navbar } from '../Components/ui/NavBar';
import { MarvelScreen } from '../Components/marvel/MarvelScreen';
import { HeroeScreen } from '../Components/heroes/HeroeScreen';
import { DcScreen } from '../Components/dc/DcScreen';
import { SearchScreen } from '../Components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (

        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroe/:heroeId" component={ HeroeScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    
                    <Route exact path="/" component={ MarvelScreen } />
                </Switch>
            </div>

        </>
    )
}
