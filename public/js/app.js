console.log('som js now in browser')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const errorMeggaseClass = 'error'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.classList.remove(errorMeggaseClass)
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    // обращение к текущему домену (без всяких localhost)
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageOne.classList.add(errorMeggaseClass)
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})