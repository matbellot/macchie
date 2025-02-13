const gallery = document.getElementById('gallery');
const imgElement = document.getElementById('image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

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

// Funzione per gestire il pulsante "Precedente"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

// Funzione per gestire il pulsante "Successivo"
nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Carica l'immagine al caricamento della pagina
window.onload = loadImages; 