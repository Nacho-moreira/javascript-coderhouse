
let cardDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const formDiv = document.getElementById('formDiv');
const gameContainer = document.querySelector('.gameContainer');
const cardContainer = document.querySelector('.cardContainer');


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var playerName = document.getElementById("name").value;
    const playerAge = document.getElementById("age").value;

    if (playerAge < 18) {
        Swal.fire({
            icon: "error",
            title: "Disculpa",
            text: "No cumples la edad mínima para ingresar al juego",
            confirmButtonColor: '#d42c2c'
          });
    } else {
        formDiv.classList.toggle('hidden');
        gameContainer.classList.toggle('hidden');
        const welcomeTitle = document.getElementById('welcome');
        welcomeTitle.innerText = `Comencemos a jugar, ${playerName}.`;
        juego()
    }
})

const darkModeBtn = document.getElementById('darkModeBtn');
const theme = document.body;
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
    theme.classList.add('darkMode');
    darkModeBtn.classList.remove('darkModeToggle');
    localStorage.setItem('darkMode', 'enabled');
};
const disableDarkMode = () => {
    theme.classList.remove('darkMode');
    darkModeBtn.classList.add('darkModeToggle');
    localStorage.setItem('darkMode', 'disabled');
};

if (darkMode === 'enabled') {
    enableDarkMode();
};

darkModeBtn.addEventListener('click', (e)=> {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    };
});

function juego() {
    
    let deck = cardDeck;
    let chosenCard = mazo[Math.floor(Math.random() * deck.length)];
    let cardCounter = 0;
    let resultsContainer = document.getElementById('resultsContainer');
    let resultTitle = document.createElement('h4');

    let resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', (e)=> {
        window.location.reload();
    })

    const hitBtn = document.getElementById('hit');
    hitBtn.addEventListener('click', (click) =>{
        let showCard = document.createElement('p');
        showCard.innerText = `${chosenCard}`;
        cardContainer.appendChild(showCard);
        cardCounter = cardCounter + chosenCard;
        chosenCard = deck[Math.floor(Math.random() * deck.length)];
        if (cardCounter > 21) {
            hitBtn.disabled = true;
            resultsContainer.classList.remove('hidden');
            resultTitle.innerText = `¡Perdiste! Te pasaste de 21, tu puntaje es ${cardCounter}`;
            resetBtn.classList.remove('hidden')
            resultsContainer.appendChild(resultTitle);
        }
    });

    const stayBtn = document.getElementById('stay');
    stayBtn.addEventListener('click', (click) => {
        stayBtn.disabled = true;
        resultsContainer.classList.remove('hidden');
        resetBtn.classList.remove('hidden')

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
