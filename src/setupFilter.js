import renderAllCards from './renderAllCards'
import filterHouse from './filterHouse'

export default function setupFilter(array, identifier = 'all') {
  console.log(identifier)
  switch (identifier) {
    case 'Gryffindor':
      filterHouse('Gryffindor', array)
      break
    case 'Slytherin':
      filterHouse('Slytherin', array)
      break
    case 'Hufflepuff':
      filterHouse('Hufflepuff', array)
      break
    case 'Ravenclaw':
      filterHouse('Ravenclaw', array)
      break
    case 'No-House':
      filterHouse('No-House', array)
      break
    default:
      renderAllCards(array)
  }
}
