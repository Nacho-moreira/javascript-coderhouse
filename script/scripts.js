
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

const darkModeBtn = document.getElementById('darkModeBtn');
const theme = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
    theme.classList.add('darkMode');
    darkModeBtn.classList.remove('dark-mode-toggle');
    localStorage.setItem('dark-mode', 'enabled');
};
const disableDarkMode = () => {
    theme.classList.remove('darkMode');
    darkModeBtn.classList.add('dark-mode-toggle');
    localStorage.setItem('dark-mode', 'disabled');
};

if (darkMode === 'enabled') {
    enableDarkMode();
};

darkModeBtn.addEventListener('click', (e)=> {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    };
});

function juego() {
    
    let mazo = mazoCartas;
    let cartaElegida = mazo[Math.floor(Math.random() * mazo.length)];
    let cardCounter = 0;
    let jugador = localStorage.getItem('jugador');
    let resultsContainer = document.getElementById('resultsContainer');
    const welcomeTitle = document.getElementById('welcome');
    welcomeTitle.innerText = `Comencemos a jugar, ${jugador}.`;

    const hitBtn = document.getElementById('hit');
    hitBtn.addEventListener('click', (click) =>{
        let muestraCarta = document.createElement('p');
        muestraCarta.innerText = `${cartaElegida}`;
        cardContainer.appendChild(muestraCarta);
        cardCounter = cardCounter + cartaElegida;
        cartaElegida = mazo[Math.floor(Math.random() * mazo.length)];
        if (cardCounter > 21) {
            hitBtn.disabled = true;
        }
    });

    const stayBtn = document.getElementById('stay');
    stayBtn.addEventListener('click', (click) => {
        resultsContainer.classList.remove('hidden');
        let resultTitle = document.createElement('h4');
        if (cardCounter > 21) {
            resultTitle.innerText = `¡Perdiste! Te pasaste de 21, tu puntaje es ${cardCounter}`;
        } else if (cardCounter == 21) {
            resultTitle.innerText = `¡BlackJack! ¡Ganaste!`;
        } else {
            resultTitle.innerText = `Tu puntaje es de ${cardCounter}`;
        };
        resultsContainer.appendChild(resultTitle);
    });
};
