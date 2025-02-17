import { useEffect } from 'react'

export default function Cards({ pokemons, updatePokemons, handleClick }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(updatePokemons, [])

  return (
    <div className="pt-12">
      {pokemons.map((pokemon) => {
        const captalized = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

        return (
          <div key={pokemon.name} onClick={handleClick(pokemon.name)}>
            <img src={pokemon.sprite} alt="" />
            <p>{captalized}</p>
          </div>
        )
      })}
    </div>
  )
}
