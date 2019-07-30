// изменяет фон в зависимости от погоды (временно не работает пытаюсь разобраться)
import { changeTheme } from '../../dist/scripts/changeTheme.min.js';

function changeBackground() {
    const video   = document.querySelector('.js-video'),
          slide   = document.querySelector('.js-item-active'),
          sky     = slide.querySelector('.js-sky'),
          fallout = slide.querySelector('.js-fallout');

    const backgrounds = {
        cliar: 'assets/video/clear.mp4',
        clouds: 'src="assets/video/clouds.mp4',
        rain: '<source class="js-source" src="assets/video/rain.mp4"</source>',
        snow: '<source class="js-source" src="assets/video/snow.mp4"</source>'
    };

    let source = document.createElement('source'),
        oldSource = video.querySelector('.js-source');

        source.className = 'js-source';

        if(sky.innerText === 'ясно') {
            source.src = backgrounds.cliar;
        } else if(fallout.innerText === 'без осадков') {
            source.src = backgrounds.clouds;
        } else if(fallout.innerText === 'дождь') {
            source.src = backgrounds.rain;
        } else if(fallout.innerText === 'снег') {
            source.src = backgrounds.snow;
        }

        if(oldSource) {
            video.replaceChild(source, oldSource);
        } else {
            video.appendChild(source);
        }

        changeTheme();
}

export { changeBackground };
