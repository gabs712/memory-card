import { useState } from 'react'
import Cards from './Cards'
import getPokemons from '../api/getPokemons'

export default function Game() {
  const [pokemons, setPokemons] = useState([])

  function updatePokemons() {
    getPokemons().then((newPokemons) => {
      setPokemons(newPokemons)
    })
  }

  return <Cards {...{ pokemons, updatePokemons }} />
}
