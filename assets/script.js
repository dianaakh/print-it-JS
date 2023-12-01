// Tableau contenant les informations sur chaque diapositive
const slides = [            
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Initialisation de l'index de la diapositive actuelle avec let car la valeur de la variable va changer
let currentSlideIndex = 0;

const bannerImg = document.querySelector('.banner-img'); // Variable const car valeur ne change pas durant le code - Sélection de l'image du banner 
const tagLine = document.querySelector('#banner p'); // Sélection du paragraphe dans le banner
const dot = document.querySelector('.dot_selected') // Sélection du bullet point

// Fonction pour afficher une diapositive en fonction de son index dans le tableau
const showSlide = (index) => {
    bannerImg.src = slides[index].image; // Mise à jour de l'URL de l'image du banner
    tagLine.innerHTML = slides[index].tagLine; // Mise à jour du texte de la diapositive
   
};


const arrowLeft = document.querySelector('.arrow_left');      // Sélection de la flèche gauche et ajout d'un event listener pour le clic
if (arrowLeft) {
    arrowLeft.addEventListener('click', () => {
        // Déplacement vers la diapositive précédente tout en gérant les bords du tableau
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex); // Afficher la diapositive correspondante
    });
} 
else {
    console.log("Erreur");
}

// Sélection de la flèche droite et ajout d'un event listener pour le clic
const arrowRight = document.querySelector('.arrow_right');
if (arrowRight) {
    arrowRight.addEventListener('click', () => {
        // Déplacement vers la diapositive suivante tout en gérant les bords du tableau
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex); // Afficher la diapositive correspondante
    });
} 
else {
    console.log("Erreur");
}

// Afficher la diapositive initiale lorsque la page se charge
showSlide(currentSlideIndex);
