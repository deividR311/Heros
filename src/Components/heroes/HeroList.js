import React, { useMemo } from 'react';
import { GetHerosByPublisher } from '../../selectors/GetHerosByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    //useMemo nos permite llamar la funcion, variable etc.. que yo le especifique solamente cuando esta cambie
    //en las llaves al final del useMemo se especifica el parametro (publisher) que tiene
    //que cambiar para asi llamar la funcion (GetHerosByPublisher)
    const heroes = useMemo(() => GetHerosByPublisher( publisher ), [publisher])

    //de esta manera podemos utilizar el servicio que nos trae la data por el parametro 'publisher'
    // const heroes = GetHerosByPublisher(publisher);
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
