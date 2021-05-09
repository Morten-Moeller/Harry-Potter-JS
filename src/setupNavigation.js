import setupFilter from './setupFilter'
import filterAge from './filterAge'

export default function setupNavigation(array) {
  //   const nav = document.querySelector('[data-nav-mobile]')
  const reset = document.querySelector('[data-nav-reset]')

  setupReset(reset, array)
  setupFilterHouse(array)
  setupCurrentAge(array)
}

function setupReset(reset, array) {
  reset.addEventListener('click', e => {
    e.preventDefault()
    setupFilter(array, 'All')
  })
}

function setupFilterHouse(array) {
  const cardArray = array
  const buttons = document.querySelectorAll('[data-nav-house]')
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault()
      const buttonName = button.dataset.navHouse
      setupFilter(cardArray, buttonName)
    })
  })
}

function setupCurrentAge(array) {
  const buttonAge = document.querySelector('[data-nav-age]')
  buttonAge.addEventListener('click', () => {
    filterAge(array)
  })
}
