function disableBtn() {
    const slides    = document.querySelectorAll('.js-slide'),
          btnPrev   = document.querySelector('.js-btn__prev'),
          btnNext   = document.querySelector('.js-btn__next'),
          lastSlide = slides.length - 1;

    let isFirstSlide = slides[0].classList.contains('js-item-active'),
        isLastSlide  = slides[lastSlide].classList.contains('js-item-active');

    if(isFirstSlide) {
        btnPrev.classList.add('slider__btn-disabled');
    } else {
        btnPrev.classList.remove('slider__btn-disabled');
    }

    if(isLastSlide) {
        btnNext.classList.add('slider__btn-disabled');
    } else {
        btnNext.classList.remove('slider__btn-disabled');
    } 
}

export { disableBtn };
