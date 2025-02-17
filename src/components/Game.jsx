import { useState } from 'react'
import Cards from './Cards'
import getPokemons from '../api/getPokemons'
import ScoreBoard from './ScoreBoard'
import randomizeArray from '../utils/randomizeArray'

export default function Game() {
  const [pokemons, setPokemons] = useState([])
  const [clicked, setCliked] = useState([])
  const [highest, setHighest] = useState(0)

  function updatePokemons() {
    getPokemons().then((newPokemons) => {
      setPokemons(newPokemons)
    })
  }

  const handleClick = (name) => () => {
    setPokemons(randomizeArray(pokemons))

    if (clicked.includes(name)) {
      setCliked([])
      return
    }

    const newClicked = [...clicked, name]
    if (newClicked.length > highest) {
      setHighest(newClicked.length)
    }

    setCliked(newClicked)
  }

  return (
    <>
      <ScoreBoard {...{ clicked, highest }} />
      <Cards {...{ pokemons, updatePokemons, handleClick }} />
    </>
  )
}
