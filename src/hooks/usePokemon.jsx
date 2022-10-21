import React, { useState, useEffect } from 'react'
import { fetchAllPokemons } from '../helpers/fetchAllPokemons';

export const usePokemon = () => {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    //carga de los pokemons
    fetchAllPokemons();
  }, [])
  

  return{
    isLoading
  }
}
