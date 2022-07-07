const showForm = (() => {
    const btnNewGame = document.querySelector('#start-game')
    btnNewGame.addEventListener('click', () => {
        document.querySelector('#form').style.display ='block'; 
    });
})(); 

const closeForm = (() => {
    const closeSpan = document.querySelector('#close')
    closeSpan.addEventListener('click', () => {
        document.querySelector('#form').style.display = 'none'; 
    });
})(); 

const submit = (() => {
    const submitBtn = document.querySelector('#submit')
    submitBtn.addEventListener('click', () => {
        document.querySelector('#form').style.display = 'none'; 
        document.querySelector('#start-game').style.display = 'none'
        playersTurn(); 
    }); 
})(); 

function playersTurn() {
    const playersContainer = document.querySelector('.players-container')
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');
    
    const playerOne = document.querySelector('.player-one').value; 
    
    infoContainer.textContent = `${playerOne}` + "'s turn"
    
    playersContainer.appendChild(infoContainer);
}

const buildGameBoard = (() => {
    const submitBtn = document.querySelector('#submit')
    submitBtn.addEventListener('click', () => {
        makeGrid(); 
    });
})(); 

function makeGrid() {
    let grid= 3 * 3; 
    for (i=0; i<grid; i++) {
        const boardgameContainer = document.querySelector('.boardgame')
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.border = "thin solid purple";
        boardgameContainer.appendChild(content); 
    }

}