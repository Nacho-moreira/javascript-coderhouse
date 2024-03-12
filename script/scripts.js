/* let nombreUsuario = prompt("Introduce tu nombre");
let edadUsuario = parseInt(prompt(`Hola ${nombreUsuario}, por favor introduce tu edad`));



if (edadUsuario < 18) {
    alert("No che, no deberías estar jugando acá.");
} else {
    alert(`Excelente ${nombreUsuario}, bienvenido al juego.`);
};
let comienzo = confirm("¿Deseas comenzar a jugar?") */

let mazoCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombreJugador = document.getElementById("nombre").value;
    const edadJugador = document.getElementById("edad").value;

    if (edadJugador < 18) {
        alert("Disculpa, no puedes jugar aún")
    } else {
        juego()
    }
})

function juego() {
    
    let mazo = mazoCartas;
    let cartaElegida = mazo[Math.floor(Math.random() * mazo.length)];
    alert(`Tu primer carta tiene el número ${cartaElegida}`);
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
                break;
            } else if (pedirOtra == false) {
                alert('Hasta pronto.');
                break;
            } else if(sumaCartas > 21) {
                alert("¡Perdiste! Fin del juego.")
                break
            };
            pedirOtra = confirm('¿Quieres otra carta?');
            nuevaCarta = mazo[Math.floor(Math.random() * mazo.length)];
            sumaCartas = sumaCartas + nuevaCarta;
        }
    }
};
/* 
if (comienzo == true) {
    juego();
} else {
    alert("¡Hasta luego!")
} */