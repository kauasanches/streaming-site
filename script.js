const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlide() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlide() {
    slider[currentSlide].classList.add('on');
}

function nextSlider() {
    hideSlide();
    if(currentSlide === slider.length -1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlide();
}

function prevSlider() {
    hideSlide();
    if(currentSlide === 0) {
        currentSlide = slider.length -1;
    } else {
        currentSlide--;
    }
    showSlide();
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)