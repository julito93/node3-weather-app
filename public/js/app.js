const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    messageOne.textContent='loading...'
    messageTwo.textContent=''
    fetch('http://localhost:3000/weather?address=' + search.value).then((bostonWeatherResponse) => {
        bostonWeatherResponse.json().then((bostonWeatherData) => {
            if (bostonWeatherData.error) {
                messageOne.textContent = bostonWeatherData.error
            } else {
                messageOne.textContent = bostonWeatherData.location
                messageTwo.textContent=bostonWeatherData.forecast
            }
        })
    })
})