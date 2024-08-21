const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
    mario.classList.add('jump');

    //adiciona uma função e um tempo, executa uma função assim que o cronômetro expirar. 
    setTimeout(() => {
        mario.classList.remove('jump');

    }
        , 500
    );

};

const loop = setInterval(() => {
    
    console.log('loop');
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    //condições pro jogo acabar
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png'; 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }
}
    , 10);

document.addEventListener('keydown', jump);