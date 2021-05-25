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
let animaciones = ['toBottomRight', 'toRight', 'toLeft', 'toTopRight'];
let fondos = ['img/circulos.jpg', 'img/hearts.jpg', 'img/pared.jpg', 'img/snowflakes.jpg', 'img/tela.jpg', 'img/trama.jpg'];
let body_element = document.getElementById('bd');

let randomizeAnimation = function(intervalo) {
    let item = (Math.floor(Math.random() * animaciones.length));
    let animCandidata = `${intervalo}s ease-in-out 0s 1 normal none running ${animaciones[item]}`
    if ( animCandidata == body_element.style.animation ) {
        // console.warn(`Repitio Animacion, -${animaciones[item]}-`);
        return randomizeAnimation(intervalo);
    } else {
        console.log(`animation ${animCandidata}`);
        return animCandidata;
    }
}

let randomizeBackground = function() {
    let item = (Math.floor(Math.random() * fondos.length));
    let fondoCandidato = `url("${fondos[item]}")`
    if ( fondoCandidato != body_element.style.backgroundImage ) {
        console.log(`background-image ${fondoCandidato}`);
        return fondoCandidato;
    } else {
        // console.warn(`Repitio fondo -${fondos[item]}-!`);
        return randomizeBackground();
    }
}


let intervalo = () => {
    let intervaloAsignado = 5000
    body_element.style.backgroundImage = randomizeBackground();
    body_element.style.animation = randomizeAnimation(intervaloAsignado/1000)
}

setInterval( intervalo, 5000 );