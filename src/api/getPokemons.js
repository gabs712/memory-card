export default async function getPokemons() {
  const pokemonQuantity = 15
  const maxIdRange = 800
  const usedId = []
  const processedData = []

  for (let i = 0; i < pokemonQuantity; i++) {
    let randomId
    do {
      randomId = Math.floor(Math.random() * maxIdRange) + 1
    } while (usedId.includes(randomId))

    usedId.push(randomId)

    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}/`,
    ).then((response) => response.json())

    processedData.push({
      name: pokemon.name,
      sprite: pokemon.sprites.other['showdown']['front_default'],
    })
  }

  return processedData
}
