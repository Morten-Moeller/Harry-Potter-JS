import renderAllCards from './renderAllCards'

export default function filterHouse(houseName, cardArray) {
  const filtered = cardArray.filter(
    card =>
      card.house === houseName ||
      (houseName === 'No-House' && card.house === '')
  )
  const main = document.querySelector('[data-main]')
  main.innerHTML = ''
  renderAllCards(filtered)
}
