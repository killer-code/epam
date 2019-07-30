// менят тему в зависимости от цвета фона(косвенно т.к. цвет фона зависит от осадков)
function changeTheme() {
    const page       = document.querySelector('.full-page'),
          activeItem = document.querySelector('.js-item-active'),
          fallout    = activeItem.querySelector('.js-fallout'),
          falloutTxt = fallout.innerText;

    if(!fallout) { return };

    if(falloutTxt !== 'без осадков') {
        page.classList.add('light');
    } else {
        page.classList.remove('light');
    }
};

export { changeTheme };
