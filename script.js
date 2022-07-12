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
        playersTurnOne();
    });
   
    function playersTurnOne() {
        const playersContainer = document.querySelector('.players-container')
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');
       
        const playerOne = Player(document.querySelector('.player-one').value);
        infoContainer.textContent = playerOne.getName();
  
        playersContainer.appendChild(infoContainer);   
    }

    function playersTurnTwo() {
        const playersContainer = document.querySelector('.players-container')
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');
       
        const playerTwo = Player(document.querySelector('.player-two').value);
        infoContainer.textContent = playerTwo.getName();
  
        playersContainer.appendChild(infoContainer);   

    }
    
    function deletePlayersTurn() {
        const playersContainer = document.querySelector('.players-container')
        const infoContainer = document.querySelector('.info-container')
        playersContainer.removeChild(infoContainer); 
    }

    return {
        playersTurnOne, playersTurnTwo, deletePlayersTurn
    }


 })();
  
  
 const buildGameBoard = (() => {
    let gameboardArray = [];
    const submitBtn = document.querySelector('#submit')
    submitBtn.addEventListener('click', () => {
        for (i=0; i<9; i++) {
        const boardgameContainer = document.querySelector('.boardgame')
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.border = "thin solid black";
        content.setAttribute("data-index", `${i}`);
       
        const boxContainer = document.createElement('div');
        boxContainer.classList.add('box-container');
  
        content.appendChild(boxContainer);
        boardgameContainer.appendChild(content);
    }
    });
   
    let turn = 0;
    document.addEventListener('click', function(e) {    
        if (e.target.classList.contains('content')) {
            submit.deletePlayersTurn(); 
            turn++;
            console.log(turn)
            if(turn % 2 === 0) {
                const boxContainer = document.querySelector('.box-container');
                boxContainer.textContent = 'X'
                submit.playersTurnOne();
            }
            else {
                const boxContainer = document.querySelector('.box-container');
                boxContainer.textContent = 'O'
                submit.playersTurnTwo();
            }
  
        }
    })
  
 })();
  
  
 /*const Players = (() => {
  
    function playerOne() {
        const playersContainer = document.querySelector('.players-container')
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');
  
        const playerOne = Player(document.querySelector('.player-one').value);
        infoContainer.textContent = playerOne.getName();
  
        playersContainer.appendChild(infoContainer);
    }
  
    function playerTwo() {
        const playersContainer = document.querySelector('.players-container')
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');
  
        const playerTwo = Player(document.querySelector('.player-two').value);
        infoContainer.textContent = playerTwo.getName();
  
        playersContainer.appendChild(infoContainer);
    }
    return {
        playerOne, playerTwo
    }
  
 })();*/
  
  
const Player = (name) => {
    const getName = () => `${name}` + "'s turn";
    return { getName }; 
};
