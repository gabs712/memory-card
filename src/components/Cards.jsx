import { useEffect } from 'react'

export default function Cards({ pokemons, updatePokemons, handleClick }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(updatePokemons, [])

  return (
    <div className="pb-10 pt-16">
      <div className="mx-auto grid max-w-3xl auto-rows-[10.5rem] grid-cols-[repeat(auto-fill,minmax(8.3rem,1fr))] gap-4 px-6">
        {pokemons.map((pokemon) => {
          const captalized =
            pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

          return (
            <div
              className="flex shadow-lg cursor-pointer flex-col overflow-hidden rounded-sm"
              key={pokemon.name}
              onClick={handleClick(pokemon.name)}
            >
              <div className="flex h-full items-center justify-center overflow-hidden bg-slate-200 p-4 transition-colors duration-200 hover:bg-slate-50">
                <img src={pokemon.sprite} alt="" />
              </div>
              <div className="mt-auto bg-slate-300 px-1 py-1">
                <p className="overflow-hidden text-ellipsis text-nowrap text-center text-xs font-bold text-teal-800">
                  {captalized}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
