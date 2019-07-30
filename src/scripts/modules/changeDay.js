// Модуль отвечает за переключение элементов в слайдере 

import { changeBackground } from '../../dist/scripts/changeBackground.min.js';
import { disableBtn }  from '../../dist/scripts/disableBtn.min.js';

function changeDay() {
    const slides  = document.querySelectorAll('.js-slide'),
          btnPrev = document.querySelector('.js-btn__prev'),
          btnNext = document.querySelector('.js-btn__next');

    if(!slides) { return };

    (function changeDayClickSlide() {
        // смена слайдов по клику на элемент
        slides.forEach(function(slide) {
            slide.addEventListener('click', function() {
                let activeSlide = document.querySelector('.js-item-active');
                
                activeSlide.classList.remove('js-item-active');
                slide.classList.add('js-item-active');
                changeBackground();
                disableBtn();
            })
        })
    })();

    (function changeNextDay() {
        // выбор следующего слайда при клике на соответствующую кнопку
        btnNext.addEventListener('click', function() {
            let activeSlide = document.querySelector('.js-item-active');

            slides.forEach(function(slide, i) {
                if(slide === activeSlide) {
                    slides[i].classList.remove('js-item-active');

                    if(slides[i++]){
                        slides[i++].classList.add('js-item-active');
                    }
                }
            });
            changeBackground();
            disableBtn();
        })
    })();

    (function changePrevDay() {
        // выбор предыдущего слайда при клике на соответствующую кнопку
        btnPrev.addEventListener('click', function() {
            let activeSlide = document.querySelector('.js-item-active');

            slides.forEach(function(slide, i) {
                if(slide === activeSlide) {
                    slides[i].classList.remove('js-item-active');

                    if(slides[i--]){
                        slides[i--].classList.add('js-item-active');
                    }
                }
            });
            changeBackground();
            disableBtn();
        })
    })();
}

export { changeDay };
