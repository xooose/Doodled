function playAudio() {
    const audio = document.getElementById('backgroundAudio');
    audio.muted = false;
    audio.play().catch(error => {
        console.log('Autoplay prevented:', error);
    });
}

// Play the song when overlay is gone.
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    playAudio();
});