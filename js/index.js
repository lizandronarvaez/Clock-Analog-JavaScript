const segundos = document.getElementById('segundos')
const minutos = document.getElementById('minutos')
const horas = document.getElementById('horas')
const HoraDigital = document.querySelector('.hora')

function SetDates() {

    // Metodo date()
    const dates = new Date()

    // Obtener los segundo
    let seconds = dates.getSeconds()
    let seconds_degress = ((seconds / 60) * 360) + 90
    segundos.style.transform = `rotate(${seconds_degress}deg)`

    //Obtener los minutos
    let minutes = dates.getMinutes()
    let minutes_degrees = ((minutes / 60) * 360) + 90
    minutos.style.transform = `rotate(${minutes_degrees}deg)`

    //Obtener las horas
    let hours = dates.getHours()
    let hours_degress = ((hours / 12) * 360) + 90
    horas.style.transform = `rotate(${hours_degress}deg)`

    // Condicionales
    if (seconds < 10) seconds = '0' + seconds
    if (minutes < 10) minutes = '0' + minutes
    if (hours < 10) hours = '0' + hours

    // Hora digital
    HoraDigital.textContent = `${hours} : ${minutes} : ${seconds}`

}

setInterval(SetDates, 1000)