import React from 'react'
import { usePokemon } from '../hooks/usePokemon'

export const HomePage = () => {

  const { isLoading, pokemons} = usePokemon();


  return (
    <div className='mt-5'>

      <h1>Listado</h1>
      <hr />

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {
            
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}
