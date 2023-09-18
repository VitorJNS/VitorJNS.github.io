const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const valentinesYearContainer = document.querySelector('#year2')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 19 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

let valentinesYear;

switch(nextYear) {
    case 2024: valentinesYear = 'Contagem regressiva para 4 anos de namoro';
        break;
    case 2025: valentinesYear = 'Contagem regressiva para 5 anos de namoro'
        break;
    case 2026: valentinesYear = 'Contagem regressiva para 6 anos de namoro'
        break;
    case 2027: valentinesYear = 'Contagem regressiva para 7 anos de namoro'
        break;
    case 2028: valentinesYear = 'Contagem regressiva para 8 anos de namoro'
        break;
}

valentinesYearContainer.textContent = valentinesYear


const getTimeUnit = unit => unit <10 ? '0' + unit : unit

const insertCountdownValues = ({ days, hours, minutes, seconds }) => { 
    secondsContainer.textContent = getTimeUnit (seconds)
    minutesContainer.textContent = getTimeUnit (minutes) 
    hoursContainer.textContent = getTimeUnit (hours) 
    daysContainer.textContent = getTimeUnit (days) 
}

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60 ) % 60
    const seconds = Math.floor(difference / 1000 ) % 60

    insertCountdownValues({ days, hours, minutes, seconds })
    
}

const handleCountdownDisplay = () =>{
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000)