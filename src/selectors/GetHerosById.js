import heroes from '../data/heroes';

export const GetHerosById = ( id ) => {

    return heroes.find( hero => hero.id === id );
}
