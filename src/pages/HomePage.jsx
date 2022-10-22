import React, { useState } from 'react'
import { Loading } from '../components/Loading';
import { usePokemon } from '../hooks/usePokemon'

export const HomePage = () => {

  const { isLoading, pokemons} = usePokemon();

  const [currentPage, setcurrentPage] = useState(0)

  const [search, setsearch] = useState('')
  

  const filteredPokemons = () => {

    if(search.length === 0)
      return pokemons.slice(currentPage, currentPage + 5);


    const filtered = pokemons.filter(poke => poke.name.includes(search));
    return filtered.slice(currentPage, currentPage + 5);
  }

  const next = () => {
    if(pokemons.filter(poke => poke.name.includes(search)).length > currentPage + 5)
      setcurrentPage(currentPage + 5);
  }

  const prev = () => {
    
    if( currentPage > 0 )
    setcurrentPage(currentPage - 5);
  }

  const onSearchChange = (e) => {
    setcurrentPage(0);
    setsearch(e.target.value);
  }


  return (
    <div className='mt-5'>

      <h1>Listado</h1>
      <hr />

      <input type='text' className='mb-5 form-control' placeholder='Buscar Pokemón' value={search} onChange={ onSearchChange } />

      <button className='btn btn-primary' onClick={prev}>Prev</button>
      &nbsp;
      &nbsp;
      <button className='btn btn-primary' onClick={next}>Next</button>

      <table className='table'>
        <thead>
          <tr>
            <th style={{ width: 200 }}>ID</th>
            <th style={{ width: 250 }}>Nombre</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredPokemons().map( poke => (
              <tr key={poke.id}>
                <td>{ poke.id }</td>
                <td>{ poke.name }</td>
                <td>
                  <img src={poke.pic} alt={ poke.name } />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {
        isLoading && <Loading />
      }
      
    </div>
  )
}
