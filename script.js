const pers = document.querySelector('.pers')
const pipe = document.querySelector('.pipe')

const jump = () => {
    pers.classList.add('jump');

    setTimeout(() => {
        pers.classList.remove('jump');
    }, 600);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const persPosition = +window.getComputedStyle(pers).bottom.replace('px','');
    
    if (pipePosition <= 110 && persPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        pers.src = './images/game-over.png';
        pers.style.width = '75px'
    }

}, 10);

document.addEventListener('keydown', jump );