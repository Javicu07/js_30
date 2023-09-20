window.addEventListener('keydown', (event) => {
    console.log(event.key.toUpperCase());

    const audio = document.querySelector(`audio[code = ${event.code}]`);
    const key = document.querySelector(`.key[code = ${event.code}]`)


    if(!audio) return;
    audio.currentTime = 0;  // rewind to the start, whitout it we don´t init multiple times the keypress 
    audio.play();

    key.classList.add('playing');
});

function removeTransition(event) {
    console.log(event.propertyName);
    if(event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));