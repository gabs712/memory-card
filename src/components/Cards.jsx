import { useEffect } from 'react'

export default function Cards({ pokemons, updatePokemons, handleClick }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(updatePokemons, [])

  return (
    <div className="pb-10 pt-16">
      {pokemons.length === 0 ? (
        <div className=" flex h-[82svh] items-center justify-center">
          <p className="font-bold text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
            Loading...
          </p>
        </div>
      ) : (
        <div className="mx-auto grid max-w-3xl auto-rows-[10.5rem] grid-cols-[repeat(auto-fill,minmax(8.3rem,1fr))] gap-4 px-6">
          {pokemons.map((pokemon) => {
            const captalized =
              pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

            return (
              <button
                className="flex cursor-pointer flex-col overflow-hidden rounded-sm shadow-lg"
                key={pokemon.name}
                onClick={handleClick(pokemon.name)}
              >
                <div className="flex w-full h-full items-center justify-center overflow-hidden bg-slate-200 p-4 transition-colors duration-200 hover:bg-slate-50">
                  <img src={pokemon.sprite} alt="" />
                </div>
                <div className="mt-auto w-full bg-slate-300 px-1 py-1">
                  <p className="overflow-hidden text-ellipsis text-nowrap text-center text-xs font-bold text-teal-800">
                    {captalized}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
