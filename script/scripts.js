
let mazoCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const formDiv = document.getElementById('formDiv');
const gameContainer = document.querySelector('.gameContainer');
const cardContainer = document.querySelector('.cardContainer');

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombreJugador = document.getElementById("nombre").value;
    const edadJugador = document.getElementById("edad").value;
    const edadMinima = document.getElementById('edadMinima');

    localStorage.setItem('jugador', JSON.stringify(nombreJugador));

    if (edadJugador < 18) {
        edadMinima.classList.toggle('hidden');
    } else {
        formDiv.classList.toggle('hidden');
        gameContainer.classList.toggle('hidden');
        juego()
    }
})

function juego() {
    
    let mazo = mazoCartas;
    let cartaElegida = mazo[Math.floor(Math.random() * mazo.length)];
    let jugador = localStorage.getItem('jugador');
    const welcomeTitle = document.getElementById('welcome');
    welcomeTitle.innerText = `Comencemos a jugar, ${jugador}.`;

    const hitBtn = document.getElementById('hit');
    hitBtn.addEventListener('click', (click) =>{
        let muestraCarta = document.createElement('p');
        muestraCarta.innerText = `${cartaElegida}`;
        cardContainer.appendChild(muestraCarta);
        cartaElegida = mazo[Math.floor(Math.random() * mazo.length)];
    });

    const stayBtn = document.getElementById('stay');
    stayBtn.addEventListener('click', (click) => {
        
    });
};
