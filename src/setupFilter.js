import renderAllCards from './renderAllCards'
import filterHouse from './filterHouse'

export default function setupFilter(array, identifier = 'all') {
  const main = document.querySelector('[data-main]')
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
      main.innerHTML = ''
      renderAllCards(array)
  }
}
