document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', () => {
        const cardNumber = button.getAttribute('data-card');
        const cardImage = document.getElementById(`cardImage${cardNumber}`);
        const cardGif = document.getElementById(`cardGif${cardNumber}`);
        const background = document.querySelector('.background');
        const isPlayingGif = !cardGif.classList.contains('hidden');

        if (isPlayingGif) {
            // Switch to the photo
            cardGif.classList.add('hidden');
            cardImage.classList.remove('hidden');
            button.querySelector('button').textContent = 'Play';
            background.style.backgroundImage = `url('${cardImage.src}')`; // Set background to photo
        } else {
            // Switch to the GIF
            cardImage.classList.add('hidden');
            cardGif.classList.remove('hidden');
            button.querySelector('button').textContent = 'Resume';
            background.style.backgroundImage = `url('${cardGif.src}')`; // Set background to GIF
        }
    });
});
