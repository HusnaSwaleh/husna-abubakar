let currentSlide = 0;
let totalSlides = 0;
let slides;

function initSlides() {
	slides = document.querySelector('.project-slideshow-content').children;
	totalSlides = slides.length;
	let index = 0;
	for (let slide of slides) {
		if (index != 0) {
			slide.dataset.active = 0;
		}
		index++;
	}
}
initSlides();

function nextSlide() {
	// Iterate index
	currentSlide++;
	if (currentSlide >= totalSlides) {
		currentSlide = 0;
	}

	// Show correct slide
	let index = 0;
	for (let slide of slides) {
		if (index != currentSlide) {
			slide.dataset.active = 0;
		} else {
			slide.dataset.active = 1;
		}
		index++;
	}
}
function prevSlide() {
	// Iterate index
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = totalSlides-1;
	}

	// Show correct slide
	let index = 0;
	for (let slide of slides) {
		if (index != currentSlide) {
			slide.dataset.active = 0;
		} else {
			slide.dataset.active = 1;
		}
		index++;
	}
}
