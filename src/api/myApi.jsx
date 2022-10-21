import axios from 'axios';

export const myApi = axios.create({
  baseURL:'https://pokeapi.co/api/v2'
})