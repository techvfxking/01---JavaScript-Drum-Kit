const main = () => {
    registerDivClickEvents();
    registerKeyboardKeyDown();
};

const registerKeyboardKeyDown = () => {
    document.addEventListener("keydown", e => { playSound(e.keyCode.toString()) });
}

const registerDivClickEvents = () => {
    const keyboardKeysArray = Array.from(document.querySelectorAll(".key"));
    for (let i = 0; i < keyboardKeysArray.length; i++) {
        const keyboardKeyElement = keyboardKeysArray[i];
        keyboardKeyElement.addEventListener("click", (e) => { playSound(e.currentTarget.dataset.key, e.currentTarget) });
        keyboardKeyElement.addEventListener('transitionend', (e) => { removeTransition(e) });
    }
}

const playSound = (key, element = undefined) => {
    const audioElement = document.querySelector(`audio[data-key="${key}"]`);
    if (audioElement === undefined || audioElement === null) return;

    if (element === undefined) {
        element = document.querySelector(`div[data-key="${key}"]`);
    }
    element.classList.add("key-press");

    audioElement.currentTime = 0;
    audioElement.play();
}

const removeTransition = (element) => {
    if (element.propertyName !== "transform") return;
    element.currentTarget.classList.remove('key-press');
}

main();