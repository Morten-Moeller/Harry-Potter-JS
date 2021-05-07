export default function renderCard(cardData) {
  const { name, image, species, gender, house } = cardData
  const container = document.querySelector('[data-main]')
  const houseClass =
    house === 'Gryffindor'
      ? 'card--gryffindor'
      : house === 'Slytherin'
      ? 'card--slytherin'
      : house === 'Hufflepuff'
      ? 'card--hufflepuff'
      : house === 'Ravenclaw'
      ? 'card--ravenclaw'
      : 'card--noouse'
  const cardCanvas = document.createElement('div')
  cardCanvas.innerHTML = `
    <img src="${image.replace('http', 'https')}" class="card__image">
    <h2 class="card__heading">${name}</h2>
    <ul class="card__list">
        <li class="card__list--item">${species}</li>
        <li class="card__list--item">${gender}</li>
        <li class="card__list--item">${house}</li>
    </ul>`
  cardCanvas.classList.add('card')
  cardCanvas.classList.add(houseClass)
  container.append(cardCanvas)
}
