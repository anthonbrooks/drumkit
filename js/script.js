window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    console.log(audio);
    if (!audio) return; // return if no audio associated with key
});