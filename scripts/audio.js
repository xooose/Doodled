function playAudio() {
    const audio = document.getElementById('backgroundAudio');
    audio.muted = false;
    audio.play().catch(error => {
        console.log('Autoplay prevented:', error);
    });
}

function showImagesSequentially() {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');

    console.log(image1.style.display)
    image1.style.display = 'block';
    setTimeout(() => {
        image1.style.display = 'none';
        image2.style.display = 'block';
        setTimeout(() => {
            image2.style.display = 'none';
            image3.style.display = 'block';
            setTimeout(() => {
                image3.classList.add('fade-out', 'hidden');
            }, 1200);
        }, 300);
    }, 300);
}

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    playAudio();
    showImagesSequentially();
});
