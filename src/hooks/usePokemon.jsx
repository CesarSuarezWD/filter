import { useState, useEffect } from 'react'
import { fetchAllPokemons } from '../helpers/fetchAllPokemons';

export const usePokemon = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [pokemons, setpokemons] = useState([]);


  const getHistory = async () => {
    const data = await fetchAllPokemons();
    setIsLoading(false);
    setpokemons(data);
    
  }

  useEffect(() => {
    getHistory();
  }, []);
  
  // console.warn(pokemons);

  return{
    isLoading,
    pokemons
  }
}
