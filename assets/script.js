//évenement qui se déclenche quand le document HTML initial est complètement chargé et analysé
document.addEventListener("DOMContentLoaded", () => {

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

	// Initialisation de l'index de la diapositive actuelle dans le carrousel
	let index = 0;

	eventArrows(index, slides)
})

const eventArrows = (index, slides) => {
	const arrowLeft = document.querySelector('.arrow_left')
	arrowLeft.addEventListener('click', () => {
		// Déplacement vers la diapositive précédente tout en gérant les bords du tableau
		index = (index - 1 + slides.length) % slides.length
		showSlide(index, slides) // Afficher la diapositive correspondante
	})

	const arrowRight = document.querySelector('.arrow_right')
	arrowRight.addEventListener('click', () => {
		// Déplacement vers la diapo suivante tout en gérant les bords du tableau
		index = (index + 1) % slides.length
		showSlide(index, slides)
	})
}

// Fonction pour MAJ le bullet point sélectionné en fonction de l'index actuel de la diapo

const selectedDot = (index) => {
	const dots = document.querySelectorAll('.dot')
	dots.forEach((dot, dotIndex) => {
		if (dotIndex === index) {
			dot.classList.add('dot_selected') // Ajoute la classe dot_selected pour le point correspondant à l'index actuel
		} else {
			dot.classList.remove('dot_selected') // Retire la classe dot_selected des autres points de bullet
		}
	})
}

// Fonction pour afficher une diapo en fonction de son index dans le tableau

const showSlide = (index, slides) => {
	const bannerImg = document.querySelector('.banner-img')
	bannerImg.src = slides[index].image // MAJ de l'URL de l'image du banner avec l'URL de l'image correspondante à l'index
	const tagLine = document.querySelector('#banner p')
	tagLine.innerHTML = slides[index].tagLine // MAJ du texte de la diapo avec le texte correspondant à l'index
	selectedDot(index) // MAJ du bullet point sélectionné en fonction de l'index de la diapo actuelle
}