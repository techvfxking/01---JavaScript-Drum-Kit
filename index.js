const keyboardKeysArray = Array.from(document.querySelectorAll(".key"));
const main = () => {
    for (let i = 0; i < keyboardKeysArray.length; i++) {
        const keyboardKeyElement = keyboardKeysArray[i];
        keyboardKeyElement.addEventListener("click", (e) => { playSound(e.currentTarget.dataset.key, e.currentTarget) });
        keyboardKeyElement.addEventListener('transitionend', (e) => { removeTransition(e) });
    }

};

const playSound = (key, element) => {
    const audioElement = document.querySelector(`audio[data-key="${key}"]`);
    if (audioElement === undefined || audioElement === null) return;

    element.classList.add("key-press");
    audioElement.currentTime = 0;
    audioElement.play();
}

const removeTransition = (element) => {
    if (element.propertyName !== 'border-bottom-color') return;
    element.currentTarget.classList.remove('key-press');
}

main();