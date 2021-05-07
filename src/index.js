import fetchAllData from './utils/fetchAllData'
import renderAllCards from './renderAllCards'
import setupNavigation from './setupNavigation'

// let cardArray

fetchAllData().then(data => {
  // cardArray = data
  renderAllCards(data)
  setupNavigation(data)
})
