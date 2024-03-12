
let mazoCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const formDiv = document.getElementById('formDiv');
const gameContainer = document.getElementById('gameContainer');

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
    const cartas = document.querySelectorAll('#gameContainer p');

    console.log(cartas);
    /* alert(`Tu primera carta tiene el número ${cartaElegida}`);
    let pedirOtra = confirm(`¿Quieres otra carta?`);
    if (pedirOtra == false) {
        alert(`Fin del juego. Hasta la próxima.`);
    } else {
        let nuevaCarta = mazo[Math.floor(Math.random() * mazo.length)];
        let sumaCartas = cartaElegida + nuevaCarta;
        while (sumaCartas <= 21 || pedirOtra == true){
            alert(`Tus cartas suman ${sumaCartas}`)
            if (sumaCartas == 21) {
                alert('¡Blackjack!');
                localStorage.clear();
                break;
            } else if (pedirOtra == false) {
                alert('Hasta pronto.');
                localStorage.clear();
                break;
            } else if(sumaCartas > 21) {
                alert("¡Perdiste! Fin del juego.")
                
                break
            };
            pedirOtra = confirm('¿Quieres otra carta?');
            nuevaCarta = mazo[Math.floor(Math.random() * mazo.length)];
            sumaCartas = sumaCartas + nuevaCarta;
        }
    } */
};
/* 
if (comienzo == true) {
    juego();
} else {
    alert("¡Hasta luego!")
} */