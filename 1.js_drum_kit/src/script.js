function removeTransition(event) {
    console.log(event.propertyName);
    if(event.propertyName !== 'transform') return;
    this.target.classList.remove('playing');
}

function playSound(event) {
    console.log(event.key.toUpperCase());

    const audio = document.querySelector(`audio[code = ${event.code}]`);
    const key = document.querySelector(`.key[code = ${event.code}]`)
    if(!audio) return;
    
    key.classList.add('playing');
    audio.currentTime = 0;  // rewind to the start, whitout it we don´t init multiple times the keypress 
    audio.play();
}

const keys = Array.from(document.querySelectorAll(`.key`));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)

