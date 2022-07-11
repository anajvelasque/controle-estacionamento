const url = "http://localhost:8081/estacionamento"

function getInfo() {
  axios.get(url)
    .then(response => {
      const data = response.data

      placa.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

function geInfo() {
    axios.get(`${url}/1`)
      .then(response => {
        const data = response.data
  
        pl.textContent = data.name
        userId.textContent = data.id
        userCity.textContent = data.city
      })
      .catch(error => console.log(error))
  }