import React, { useState, useEffect } from 'react'
import { fetchAllPokemons } from '../helpers/fetchAllPokemons';

export const usePokemon = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [pokemons, setpokemons] = useState([]);

  useEffect(() => {
    //carga de los pokemons
    fetchAllPokemons()
      .then(pokemons)
      setIsLoading(false);
      setpokemons(pokemons);
  }, [])
  

  return{
    isLoading,
    pokemons
  }
}
