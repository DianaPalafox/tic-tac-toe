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
    }); 
})(); 