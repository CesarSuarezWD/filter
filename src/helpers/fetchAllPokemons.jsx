import  { myApi } from '../api/myApi';

export const fetchAllPokemons = async () => {

  const resp = await myApi.get('/pokemon?limit=1500');
  const smallPokemonList = resp.data.results;
  transformSmallPokemonIntoList(smallPokemonList)
}

const transformSmallPokemonIntoList = (smallPokemonList) => {

  const pokemonArr = smallPokemonList.map( poke => {
    return{
      id: 1,
      name: 'asdfadsf',
      pic: 'sdgdsfg'
    }
  });

  return pokemonArr;
}

//Queda en el minuto 17:47 https://www.youtube.com/watch?v=Q9jT1fZTV38&list=LL&index=2&t=5s