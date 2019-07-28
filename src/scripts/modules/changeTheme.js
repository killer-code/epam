function changeTheme() {
    const page       = document.querySelector('.full-page'),
          activeItem = document.querySelector('.js-item-active'),
          fallout    = activeItem.querySelector('.js-fallout'),
          falloutTxt = fallout.innerText;

    if(!fallout) { return };

    if(falloutTxt !== 'без осадков') {
        page.classList.add('light');
    }
};

export { changeTheme };
