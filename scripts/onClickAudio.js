function playOnClickAudio() {
    const audio = document.getElementById('onClickAudio');
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(error => {
            console.log('Error playing audio:', error);
        });
    }
}

document.addEventListener('click', function() {
    playOnClickAudio();
});
