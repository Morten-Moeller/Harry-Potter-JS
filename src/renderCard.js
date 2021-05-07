export default function renderCard(card) {
  const { name, image, wand, species, gender, house } = card

  const container = document.querySelector('data-main')
  const cardCanvas = document.createElement('div')

  cardCanvas.innerHTML = `
    <img src="${image.replace('http', 'https')}">
    <h2>${name}</h2>
    <ul>
        <li>${species}</li>
        <li>${gender}</li>
        <li>${house}</li>
    </ul>
    <div>Wand: <p>${wand}</p></div>
    `
  container.append(card)
}
