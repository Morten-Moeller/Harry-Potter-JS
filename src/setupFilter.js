import renderAllCards from './renderAllCards'
import filterHouse from './filterHouse'

export default function setupFilter(array, identifier = 'all') {
  const main = document.querySelector('[data-main]')
  main.innerHTML = ''
  switch (identifier) {
    case 'Gryffindor':
      filterHouse('Gryffindor')
      break
    case 'Slytherin':
      filterHouse('Slytherin')
      break
    case 'Hufflepuff':
      filterHouse('Hufflepuff')
      break
    case 'Ravenclaw':
      filterHouse('Ravenclaw')
      break
    case 'No House':
      filterHouse('No House')
      break
    default:
      renderAllCards(array)
  }
}
