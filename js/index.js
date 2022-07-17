
const segundos = document.getElementById('segundos')
const minutos = document.getElementById('minutos')
const horas = document.getElementById('horas')
const hora = document.querySelector('.hora')

function SetDates() {
    // Metodo date()
    const dates = new Date()

    // Obtener los segundo
    const seconds = dates.getSeconds()
    const seconds_degress = ((seconds / 60) * 360) + 90
    segundos.style.transform = `rotate(${seconds_degress}deg)`
    
    //Obtener los minutos
    const minutes = dates.getMinutes()
    const minutes_degrees = ((minutes / 60) * 360) + 90
    minutos.style.transform = `rotate(${minutes_degrees}deg)`
    
    //Obtener las horas
    const hours = dates.getHours()
    const hours_degress = ((hours / 12) * 360) + 90
    horas.style.transform = `rotate(${hours_degress}deg)`
    hora.textContent = `${hours} : ${minutes} : ${seconds}`

}

setInterval(SetDates, 1000)