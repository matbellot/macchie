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
    imgElement.src = `images/${images[currentIndex]}`; // Aggiorna l'immagine
}

// Funzione per caricare l'immagine iniziale
function loadImages() {
    updateImage();
}

// Gestione dei pulsanti "Precedente" e "Successivo"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage(); // Aggiorna l'immagine
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage(); // Aggiorna l'immagine
    }
});

// Carica l'immagine al caricamento della pagina
window.onload = loadImages; 
