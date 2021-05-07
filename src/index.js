import fetchAllData from './utils/fetchAllData'
import renderAllCards from './renderAllCards'

// let cardArray

fetchAllData().then(data => {
  //   cardArray = data
  renderAllCards(data)
})
