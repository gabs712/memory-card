export default function randomizeArray(array) {
  const newArray = []
  const usedIndexes = []

  for (let i = 0; i < array.length; i++) {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * array.length)
    } while (usedIndexes.includes(newIndex))
    usedIndexes.push(newIndex)

    newArray.push(array[newIndex])
  }

  return newArray
}
