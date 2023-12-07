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



// Initialisation de l'index de la diapositive actuelle dans le carrousel avec let car la valeur de la variable va changer
let currentSlideIndex = 0;

const bannerImg = document.querySelector('.banner-img'); // Récupère l'image du banner 
const tagLine = document.querySelector('#banner p'); // Récupère paragraphe du banner
const dots = document.querySelectorAll('.dot') // Récupère les bullet points



// Fonction pour afficher une diapo en fonction de son index dans le tableau
const showSlide = (index) => {
    bannerImg.src = slides[index].image // MAJ de l'URL de l'image du banner avec l'URL de l'image correspondante à l'index
    tagLine.innerHTML = slides[index].tagLine // MAJ du texte de la diapo avec le texte correspondant à l'index
	selectedDot(index) // Mise à jour du bullet point sélectionné en fonction de l'index de la diapo actuelle
};


const selectedDot = (index) => {    // Fonction pour MAJ le bullet point sélectionné en fonction de l'index actuel
    dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
            dot.classList.add('dot_selected') // Ajoute la classe dot_selected pour le point correspondant à l'index actuel
        } else {
            dot.classList.remove('dot_selected') // Retire la classe dot_selected des autres points de bullet
        }
    })
}

const arrowLeft = document.querySelector('.arrow_left');   // Sélection de la flèche gauche et ajout d'un event listener pour le clic
if (arrowLeft) {
    arrowLeft.addEventListener('click', () => {
        // Déplacement vers la diapositive précédente tout en gérant les bords du tableau
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length // .length pour nb d'élements du tableau 
        showSlide(currentSlideIndex) // Afficher la diapositive correspondante
    })
} 
else {
    alert("Erreur")
}

const arrowRight = document.querySelector('.arrow_right')
if (arrowRight) {
    arrowRight.addEventListener('click', () => {
        // Déplacement vers la diapo suivante tout en gérant les bords du tableau
        currentSlideIndex = (currentSlideIndex + 1) % slides.length // % opérateur modulo pour revenir a la première diapo : boucle
        showSlide(currentSlideIndex)
    })
} 
else {
    alert("Erreur")
}

// Afficher la diapo initiale lorsque la page se charge avec l'appel de la fonction(+argument)
showSlide(currentSlideIndex)
