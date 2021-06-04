const goButton = document.getElementById('go');
goButton.addEventListener('click', theme);
goButton.style.cursor = 'pointer';


// Algunas variables
const rounds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const hour_html = document.getElementById('hour');
const minute_html = document.getElementById('minute');
const second_html = document.getElementById('second');
const date_html = document.getElementById('date');

// Cambio de fondos
const animaciones = ['toTop', 'toTopRight', 'toRight', 'toBottomRight', 'toBottom', 'toBottomLeft', 'toLeft', 'toTopLeft'];
const fondos = ['img/circulos.jpg', 'img/hearts.jpg', 'img/pared.jpg', 'img/pared2.jpg', 'img/snowflakes.jpg', 'img/tela.jpg', 'img/trama.jpg'];
const body_element = document.getElementById('bd');



let intervalo = () => {
    let intervaloAsignado = 20;
    body_element.style.backgroundImage = randomizeBackground();
    body_element.style.animation = randomizeAnimation(intervaloAsignado);
};


function theme() {
    const fColor = document.getElementById('font-color').value;
    const bColor = document.getElementById('bkg-color').value;
    const ACTUAL = document.getElementById('contenedor');

    ACTUAL.classList.toggle('aparecer');
    ACTUAL.classList.toggle('desaparecer');

    goButton.removeEventListener('click', theme);
    goButton.style.cursor = 'not-allowed';

    setTimeout( ()=>{
        goButton.style.cursor = 'pointer';
        goButton.addEventListener('click', theme);
        Array.from(ACTUAL.children).forEach(c => c.style.color = fColor);
        ACTUAL.style.backgroundColor = bColor;
        
        ACTUAL.classList.toggle('aparecer');
        ACTUAL.classList.toggle('desaparecer');
    }, 1000);
};


let date = function(date) {
    date_html.innerHTML == `${days[date.getDay()]},  ${date.getDate()} de ${month[date.getMonth()].toLowerCase()}` ? {} : date_html.innerHTML = `${days[date.getDay()]},  ${date.getDate()} de ${month[date.getMonth()].toLowerCase()}`;
};


let check = (time) => {
    if (rounds.includes(time)) {
        return `0${+time.toString()}`;
    } else {
        return time;
    };
};


let tick = function() {
    let clock = new Date();

    let hour = check( clock.getHours() );
    let minute = check( clock.getMinutes() );
    let second = check( clock.getSeconds() );


    hour_html.innerHTML   == hour   ? {} : hour_html.innerHTML   = hour  ;
    minute_html.innerHTML == minute ? {} : minute_html.innerHTML = minute;
    second_html.innerHTML == second ? {} : second_html.innerHTML = second;

    //let timer = `${hour}\:${minute}\:${second}`
    //console.log( timer );

    if( date_html != clock ) {
        date(clock);
    };
};


let randomizeAnimation = function(intervalo) {
    let item = (Math.floor(Math.random() * animaciones.length));
    let animCandidata = `${intervalo}s ease-in-out 0s 1 normal none running ${animaciones[item]}`;
    if ( animCandidata == body_element.style.animation ) {
        //console.warn(`Repitio Animacion, -${animCandidata}-`);
        return randomizeAnimation(intervalo);
    } else {
        //console.log(`animation ${animCandidata}`);
        return animCandidata;
    }
}

let randomizeBackground = function() {
    let item = (Math.floor(Math.random() * fondos.length));
    let fondoCandidato = `url("${fondos[item]}")`;
    if ( fondoCandidato != body_element.style.backgroundImage ) {
        //console.log(`background-image ${fondoCandidato}`);
        return fondoCandidato;
    } else {
        // console.warn(`Repitio fondo -${fondos[item]}-!`);
        return randomizeBackground();
    };
};

// Ejecucion secuencialpara actualizaciones
setInterval( tick, 1000);

// Primera y demas ejecuciones
intervalo();
setInterval( intervalo, 20000 );