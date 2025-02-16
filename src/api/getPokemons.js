export default async function getPokemons() {
  const processedData = []
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  const pokemonData = await response.json()

  for (const data of pokemonData.results) {
    const pokemon = await fetch(data.url).then((response) => response.json())
    processedData.push({
      name: pokemon.name,
      sprite: pokemon.sprites.other['showdown']['front_default'],
    })
  }

  return processedData
}
