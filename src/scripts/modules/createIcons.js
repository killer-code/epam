function createIcons() {
    const slides = document.querySelectorAll('.js-slide');

    slides.forEach(function(el) {
        const icon    = el.querySelector('.item__icon'),
              sky     = el.querySelector('.js-sky').innerText,
              fallout = el.querySelector('.js-fallout').innerText;

        if(sky === 'ясно') {
            icon.classList.add('fas', 'fa-sun');
        } else if (fallout === 'без осадков') {
            icon.classList.add('fas', 'fa-cloud');   
        } else if (fallout === 'снег') {
            icon.classList.add('far', 'fa-snowflake'); 
        } else if (fallout === 'дождь') {
            icon.classList.add('fas', 'fa-cloud-showers-heavy');  
        }
    });
}

export { createIcons };
