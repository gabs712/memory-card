import { useEffect } from 'react'

export default function Cards({ pokemons, updatePokemons }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(updatePokemons, [])

  return (
    <div>
      {pokemons.map((pokemon) => {
        const captalized = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

        return (
          <div key={pokemon.name}>
            <img src={pokemon.sprite} alt="" />
            <p>{captalized}</p>
          </div>
        )
      })}
    </div>
  )
}
