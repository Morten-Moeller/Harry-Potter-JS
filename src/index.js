console.clear()
fetchAllData()

function fetchAllData() {
  const url = 'https://hp-api.herokuapp.com/api/characters'
  return fetch(url).then(response => response.json())
}

console.log(fetchAllData())
