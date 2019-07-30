function writeHeaderDate() {
    const tagDate = document.querySelector('.js-date'),
          tagDay  = document.querySelector('.js-day');

    const fullDate = new Date(),
          date     = fullDate.getDate(),
          month    = fullDate.getMonth(),
          day      = fullDate.getDay();

    const months = ['Января', 'Февраля', 'Мара', 'Апреля', 'Мая', 'Июня', 'Июля', 
                    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 
                        'Четверг', 'Пятница', 'Суббота'];
    
    tagDate.innerText = `${date} ${months[month]},`;
    tagDay.innerText  = `${daysOfWeek[day]}`;
}

export { writeHeaderDate }
