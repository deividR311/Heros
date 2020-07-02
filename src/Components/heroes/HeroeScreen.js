import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom'
import { GetHerosById } from '../../selectors/GetHerosById';

export const HeroeScreen = ({ history }) => {

    //history nos permite guardar el historial de las rutas navegadas, como tambien nos permite navegar

    //use params es un hook que nos permite capturar los datos de la URL
    const params = useParams();
    // desestructuramos el params
    const { heroeId } = params;

    //useMemo nos permite llamar la funcion, variable etc.. que yo le especifique solamente cuando esta cambie
    //en las llaves al final del useMemo se especifica el parametro (heroeId) que tiene
    //que cambiar para asi llamar la funcion (GetHerosById)
    const hero = useMemo(() => GetHerosById( heroeId ), [heroeId])

    //de esta manera podemos utilizar el servicio que nos trae la data por el parametro 'heroeId'
    // const hero = GetHerosById( heroeId );

    //esta condicion me permite controlar las url erroneas
    if (!hero) {
        return (
            <Redirect to="/" />
        )
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleOnClick = () => {

        if (history.length <= 2 ) {
            history.push( '/' );
        }else {
            history.goBack();
        }
        
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`./assets/heroes/${heroeId}.jpg`}
                    alt={heroeId}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3> {superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> {alter_ego} </li>
                    <li className="list-group-item"> <b> Publisher: </b> {publisher} </li>
                    <li className="list-group-item"> <b> First appearance: </b> {first_appearance} </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button onClick={ handleOnClick } className="btn btn-outline-info">
                    Return
                </button>
            </div>
        </div>
    )
}
