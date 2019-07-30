function changeData() {
    const xhr  = new XMLHttpRequest(); 

    xhr.open('GET', 'http://localhost:3000/db', false);
    xhr.send();

    const data     = JSON.parse(xhr.responseText).db;

    const date     = new Date(),
          year     = date.getFullYear(),
          month    = date.getMonth() + 1,
          day      = date.getDate(),
          todayStr = `${year},${month},${day}`,
          today    = Date.parse(todayStr);

    const slides = document.querySelectorAll('.js-slide');

    const months = ['Января', 'Февраля', 'Мара', 'Апреля', 'Мая', 'Июня', 'Июля', 
                    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 
                        'Четверг', 'Пятница', 'Суббота'];

    let arrData = [],
        item    = 0,
        count   = 4;

    for(item; item < data.length; item++) {

        if(data[item].date === today) {
            item = item;
        }
        break;
    }

    for(item; item < count; item++) {
        arrData.push(data[item]);
    }

    slides.forEach(function(el, i) {
        const thisData  = arrData[i],
              thisDate  = new Date(thisData.date).getDate(),
              thisMonth = new Date(thisData.date).getMonth(),
              thisDay   = new Date(thisData.date).getDay();

        const tagDay      = el.querySelector('.js-item__day'),
              tagDate     = el.querySelector('.js-item__date'),
              tempDaytime = el.querySelector('.js-temp__daytime'),
              tempNight   = el.querySelector('.js-temp__night'),
              tagSky      = el.querySelector('.js-sky'),
              tagFallout  = el.querySelector('.js-fallout');  

        if(i === 0) {
            tagDay.innerText = 'Сегодня';
        } else {
            tagDay.innerText = `${daysOfWeek[thisDay]}`;
        }
        tagDate.innerText = `${thisDate} ${months[thisMonth]}`;
        tempDaytime.innerHTML = thisData.temperature.day + '&deg;C';
        tempNight.innerHTML = thisData.temperature.night + '&deg;C';
        tagSky.innerText = thisData.cloudiness;
        tagFallout.innerText = thisData.fallout;
    });
}

export { changeData };
