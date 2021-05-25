let rounds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
let month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

let hour_html = document.getElementById('hour')
let minute_html = document.getElementById('minute')
let second_html = document.getElementById('second')

let date_html = document.getElementById('date')

let date = function(date) {
    date_html.innerHTML = `${days[date.getDay()]},  ${date.getDate()} de ${month[date.getMonth()].toLowerCase()}`;
}

let check = (time) => {
    if (rounds.includes(time)) {
        return `0${+time.toString()}`
    } else {
        return time
    }
}

let tick = function() {
    let clock = new Date();

    let hour = check( clock.getHours() );
    let minute = check( clock.getMinutes() );
    let second = check( clock.getSeconds() );

    hour_html.innerHTML = hour;
    minute_html.innerHTML = minute;
    second_html.innerHTML = second;

    let timer = `${hour}\:${minute}\:${second}`
    console.log( timer );
    if( date_html != clock ) {
        date(clock)
    }
}

// Ejecucion secuencialpara actualizaciones
setInterval( tick, 1000)

// Cambio de fondos
let fondos = ['img/circulos.jpg', 'img/hearts.jpg', 'img/pared.jpg', 'img/snowflakes.jpg', 'img/tela.jpg', 'img/trama.jpg']
let backgroundImage = document.getElementById('bd')

let randomize = function() {
    let item = (Math.floor(Math.random() * fondos.length));
    return item
}

let changeBackground = function() {
    backgroundImage.style.backgroundImage = `url(${fondos[randomize()]})`
    console.log(`Cambiado propiedad background-image a ${backgroundImage.style.backgroundImage}`)
}

setInterval( changeBackground, 3000)