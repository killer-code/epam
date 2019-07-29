import { changeTheme } from '../../dist/scripts/changeTheme.min.js';
import { disableBtn }  from '../../dist/scripts/disableBtn.min.js';

function changeDay() {
    const slides  = document.querySelectorAll('.js-slide'),
          btnPrev = document.querySelector('.js-btn__prev'),
          btnNext = document.querySelector('.js-btn__next');

    if(!slides) { return };

    (function changeDayClickSlide() {
        slides.forEach(function(slide) {
            slide.addEventListener('click', function() {
                let activeSlide = document.querySelector('.js-item-active');
                
                activeSlide.classList.remove('js-item-active');
                slide.classList.add('js-item-active');
                changeTheme();
                disableBtn();
            })
        })
    })();

    (function changeNextDay() {
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
            changeTheme();
            disableBtn();
        })
    })();

    (function changePrevDay() {
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
            changeTheme();
            disableBtn();
        })
    })();
}

export { changeDay };
