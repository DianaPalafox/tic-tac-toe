
(() => { 
const arr = ['', '', '', '', '', '', '', '', '']
const Form = (() => {
    const btnNewGame = document.querySelector('#start-game')
    btnNewGame.addEventListener('click', () => {
        document.querySelector('#form').style.display ='block';
    });

    const closeSpan = document.querySelector('#close')
    closeSpan.addEventListener('click', () => {
        document.querySelector('#form').style.display = 'none';
    });

    const submitBtn = document.querySelector('#submit')
    submitBtn.addEventListener('click', () => {
        document.querySelector('#form').style.display = 'none';
        document.querySelector('#start-game').style.display = 'none'
        players.playersTurnOne();
    });
 })();
  
  
 const players = (() => {
    const playersContainer = document.querySelector('.players-container')
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    function playersTurnOne() {
        const playerOne = Player(document.querySelector('.player-one').value);
        infoContainer.textContent = playerOne.getName();
  
        playersContainer.appendChild(infoContainer);   
    }

    function playersTurnTwo() {   
        const playerTwo = Player(document.querySelector('.player-two').value);
        infoContainer.textContent = playerTwo.getName();
  
        playersContainer.appendChild(infoContainer);   
    }

    function winnerOne() {
        const playerOne = Player(document.querySelector('.player-one').value);
        infoContainer.textContent = playerOne.winner();
  
        playersContainer.appendChild(infoContainer);   

    }

    function winnerTwo() {
        const playerTwo = Player(document.querySelector('.player-two').value);
        infoContainer.textContent = playerTwo.winner();
  
        playersContainer.appendChild(infoContainer);   

    }
    
    function deletePlayersTurn() {
        const playersContainer = document.querySelector('.players-container')
        const infoContainer = document.querySelector('.info-container')
        playersContainer.removeChild(infoContainer); 
    }

    return {
        playersTurnOne, playersTurnTwo, winnerOne, winnerTwo, deletePlayersTurn
    }

 })();
  

 const GameBoard = (() => {
    const submitBtn = document.querySelector('#submit')
    const boardgameContainer = document.querySelector('.boardgame')
    submitBtn.addEventListener('click', () => {
        renderBoard(); 
    });  

    function renderBoard() {
        for (i=0; i<9; i++) {
            const content = document.createElement('div');
            content.classList.add('content');
            content.style.border = "thin solid black";
            content.setAttribute('data-index', `${i}`)
            //const boxContainer = document.createElement('div');
            //boxContainer.classList.add('box-container');
            
            //content.appendChild(boxContainer);
            boardgameContainer.appendChild(content);
        }

    }

 })();
 

const appendToDOM = (() => {
    let turn = 0;
    document.addEventListener('click', function(e) {  
        let i = e.target.dataset.index  
        if (e.target.classList.contains('content') && e.target.textContent === '') {
            players.deletePlayersTurn(); 
            turn++; 
            if(turn % 2 === 0 ) {
                e.target.textContent = 'O'; 
                players.playersTurnOne();  
                arr[`${i}`] = 'O'
                console.log(arr)
                checkForWin();            
            }
            else {
                e.target.textContent = 'X'; 
                players.playersTurnTwo();
                arr[`${i}`] = 'X'
                console.log(arr)
                checkForWin(); 
                
            }
        }

    })

    function checkForWin() {
        if(arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X' || 
        arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X' || 
        arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X') {
            return players.winnerOne();
        }
        if(arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O' || 
        arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O' || 
        arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O') {
            return players.winnerTwo();
        }
        if(arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X' || 
        arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X' || 
        arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X') {
            return players.winnerOne();
        }
        if(arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O' || 
        arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O' || 
        arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O') {
            return players.winnerTwo();
        }
        if(arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X' || 
        arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X') {
            return players.winnerOne();
        }
        if(arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O' || 
        arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O') {
            return players.winnerTwo();
        }

    }     
    
})(); 

const Player = (name) => {
    const getName = () => `${name}` + "'s turn";
    const winner = () => `${name}` + "'s the winner!";
    return { getName, winner }; 
};

})(); 