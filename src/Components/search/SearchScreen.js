import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { GetHeroesByName } from '../../selectors/GetHeroesByName';

export const SearchScreen = ({ history }) => {

    //useLocation nos permite capturar la query por la url
    //(esta query es digitada por el usuario en el search)
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    //useForm es un hook creado por nosotros mismos para procesar los formularios
    const [ values, handleInputChange ] = useForm({
        searchText: q
    });

    //este es el valor a enviar al state del useForm hook
    const { searchText } = values;

    //este es el hook que trae los registros filtrados por el parametro (searchText)
    // const heroesFiltered = GetHeroesByName( searchText );

    //useMemo nos permite llamar la funcion, variable etc.. que yo le especifique solamente cuando esta cambie
    //en las llaves al final del useMemo se especifica el parametro (q) que tiene
    //que cambiar para asi llamar la funcion (GetHeroesByName)
    const heroesFiltered = useMemo(() => GetHeroesByName( q ), [q]);

    //este metodo es el onSubmit del formulario
    const handleSearch = ( e ) => {

        e.preventDefault();
        history.push( `?q=${ searchText }` );
        console.log( searchText );
    }

    return (
        <div>
            <h1> SearchScreen </h1>

            <div className="col-5">
                <h4> Search Form </h4>
                <hr />

                <form onSubmit={ handleSearch }>
                    <input type="text" name="searchText" placeholder="Find your hero"
                           className="form-control" value={ searchText } onChange={ handleInputChange }
                           autoComplete="off" />
                    <button type="submit" className="btn m-1 btn-block btn-outline-primary">
                        Search...
                    </button>
                </form>
            </div>

            <div className="col-7">
                <h4> Results </h4>
                <hr />
                <ol>
                { heroesFiltered !== [] &&
                    heroesFiltered.map( hero => (
                        
                        <HeroCard key={ hero.id } { ...hero }/>
                        
                    ))
                }
                {q === '' &&
                    <p> No Results </p>
                }
                {q !== '' && heroesFiltered.length === 0 &&
                    <p> there aren´t heros with this search "{ q }" </p>
                }
                </ol>
            </div>
        </div>
    )
}
