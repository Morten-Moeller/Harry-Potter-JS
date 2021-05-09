import renderAllCards from './renderAllCards'

export default function filterAge(array) {
  const curYear = new Date().getFullYear()
  const result = array.map(char => ({
    ...char,
    age:
      curYear - char.yearOfBirth !== 2021 ? curYear - char.yearOfBirth : false,
  }))

  const main = document.querySelector('[data-main]')
  main.innerHTML = ''
  console.log('i am alive')
  renderAllCards(result)
}
