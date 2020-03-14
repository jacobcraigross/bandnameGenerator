const button = document.querySelector('.button');
const output = document.querySelector('.output');
const arrayOne = ['Blackened', 'Graven', 'Poisonous', 'Apocalytpic', 'Sullen'];
const arrayTwo = ['Blood', 'Grief', 'Tomb', 'Agony', 'Graveyard'];

loadEventListener();
function loadEventListener(){
    button.addEventListener('click', finalName)
}

function finalName(){
    const firstName = arrayOne[Math.floor(Math.random() * arrayOne.length)];
    const secondName = arrayTwo[Math.floor(Math.random() * arrayTwo.length)];
    output.classList.add('animated', 'fadeIn');
    output.textContent = `${firstName} ${secondName}`;
    setTimeout(() => {
        output.classList.remove('animated');
        output.classList.remove('fadeIn');
    }, 1000);
}



