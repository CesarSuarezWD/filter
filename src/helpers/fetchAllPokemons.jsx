import  { myApi } from '../api/myApi';

export const fetchAllPokemons = async () => {

  const resp = await myApi.get('/pokemon?limit=1500');
  const smallPokemonList = resp.data.results;
  transformSmallPokemonIntoList(smallPokemonList)
}

const transformSmallPokemonIntoList = (smallPokemonList) => {

  const pokemonArr = smallPokemonList.map( poke => {

    const pokeArr = poke.url.split('/');
    const id = pokeArr[6];
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`

    return{
      id: id,
      pic: pic,
      name: poke.name,
    }
  });

  return pokemonArr;
}

//Queda en el minuto 23:44 https://www.youtube.com/watch?v=Q9jT1fZTV38&list=LL&index=2&t=5s