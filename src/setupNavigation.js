import setupFilter from './setupFilter'

export default function setupNavigation() {
  //   const nav = document.querySelector('[data-nav-mobile]')
  const reset = document.querySelector('[data-nav-reset]')

  setupReset(reset)
  setupFilterHouse()
}

function setupReset(reset) {
  reset.addEventListener('click', e => {
    e.preventDefault()
    setupFilter('All')
  })
}

function setupFilterHouse() {
  const buttons = document.querySelectorAll('[data-nav-house]')
  buttons.forEach(setupButton)
}

function setupButton(button) {
  button.addEventListener('click', e => {
    e.preventDefault()
    const buttonName = button.dataset.navHouse.value
    setupFilter(buttonName)
  })
}
