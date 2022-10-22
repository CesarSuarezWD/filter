import  { myApi } from '../api/myApi';

export const fetchAllPokemons = async () => {

  const resp = await myApi.get('/pokemon?limit=1500');
  const smallPokemonList = resp.data.results;
  return transformSmallPokemonIntoList(smallPokemonList)
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

  // console.warn(pokemonArr);

  return pokemonArr;
}

