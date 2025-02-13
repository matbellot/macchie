const gallery = document.getElementById('gallery');
const imgElement = document.getElementById('image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const enlargeButton = document.getElementById('enlarge');
const enlargedContainer = document.getElementById('enlarged-container');
const enlargedImage = document.getElementById('enlarged-image');
const closeButton = document.getElementById('close');

const images = [
    'Rorschach01.jpg', 
    'Rorschach02.jpg', 
    'Rorschach03.jpg', 
    'Rorschach04.jpg', 
    'Rorschach05.jpg', 
    'Rorschach06.jpg', 
    'Rorschach07.jpg', 
    'Rorschach08.jpg', 
    'Rorschach09.jpg', 
    'Rorschach10.jpg'
];

let currentIndex = 0;

// Funzione per aggiornare l'immagine visualizzata
function updateImage() {
    imgElement.src = `images/${images[currentIndex]}`;
}

// Funzione per caricare l'immagine iniziale
function loadImages() {
    updateImage();
}

// Funzione per ingrandire l'immagine
enlargeButton.addEventListener('click', () => {
    enlargedImage.src = imgElement.src; // Imposta l'immagine ingrandita
    enlargedContainer.style.display = 'flex'; // Mostra il contenitore ingrandito
});

// Funzione per chiudere l'immagine ingrandita
closeButton.addEventListener('click', () => {
    enlargedContainer.style.display = 'none'; // Nascondi il contenitore ingrandito
});

// Funzione per gestire il pulsante "Precedente" nel contenitore ingrandito
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
        if (enlargedContainer.style.display === 'flex') {
            enlargedImage.src = `images/${images[currentIndex]}`; // Aggiorna l'immagine ingrandita
        }
    }
});

// Funzione per gestire il pulsante "Successivo" nel contenitore ingrandito
nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
        if (enlargedContainer.style.display === 'flex') {
            enlargedImage.src = `images/${images[currentIndex]}`; // Aggiorna l'immagine ingrandita
        }
    }
});

// Carica l'immagine al caricamento della pagina
window.onload = loadImages; 