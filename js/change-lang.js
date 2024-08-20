const select = document.querySelector('select');
const allLang = ['ru', 'en', 'de', 'pl'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;

  // НАВИГАЦИОННОЕ МЕНЮ
  document.querySelector('.about').innerHTML = langArr['about'][hash];
  document.querySelector('.stat').innerHTML = langArr['stat'][hash];
  document.querySelector('.advantages').innerHTML = langArr['advantages'][hash];
  document.querySelector('.objects').innerHTML = langArr['objects'][hash];
  document.querySelector('.relocate').innerHTML = langArr['relocate'][hash];

  document.querySelector('.about2').innerHTML = langArr['about'][hash];
  document.querySelector('.stat2').innerHTML = langArr['stat'][hash];
  document.querySelector('.advantages2').innerHTML = langArr['advantages'][hash];
  document.querySelector('.objects2').innerHTML = langArr['objects'][hash];
  document.querySelector('.relocate2').innerHTML = langArr['relocate'][hash];

  // ИЗМЕНЕНИЕ КНОПКИ ОСТАВИТЬ ЗАЯВКУ
  document.querySelector('.get').innerHTML = langArr['get'][hash];
  document.querySelector('.get2').innerHTML = langArr['get'][hash];

  // ИЗМЕНЕНИЕ КНОПКИ УЗНАТЬ ПОДРОБНЕЕ
  document.querySelector('.button-secondary').innerHTML = langArr['more'][hash];

  // ТЕКСТ 1 HERO
  document.querySelector('.hero__text').innerHTML = langArr['line1'][hash];

  // ТЕКСТ 2 HERO
  document.querySelector('.hero__title').innerHTML = langArr['line2'][hash];

  // ТЕКСТ 3 HERO
  document.querySelector('.hero__description').innerHTML = langArr['line3'][hash];

  // О НАС
  // ЗАГОЛОВОК
  document.querySelector('.title-about').innerHTML = langArr['title-about'][hash];
  // ТЕКСТ
  document.querySelector('.title-text').innerHTML = langArr['title-text'][hash];

  // СЧЁТЧИКИ
  // КЛИЕНТЫ
  document.querySelector('.clients').innerHTML = langArr['clients'][hash];
  // ОТЗЫВЫ
  document.querySelector('.reviews').innerHTML = langArr['reviews'][hash];
  // ПОДДЕРЖКА
  document.querySelector('.support').innerHTML = langArr['support'][hash];

  // ПОЧЕМУ МЫ?
  // Заголовок
  document.querySelector('.advantages-title').innerHTML = langArr['advantages-title'][hash];

  // Первое преимущество
  document.querySelector('.adv-title1').innerHTML = langArr['adv-title1'][hash];
  document.querySelector('.adv-description1').innerHTML = langArr['adv-description1'][hash];

  // Второе преимущество
  document.querySelector('.adv-title2').innerHTML = langArr['adv-title2'][hash];
  document.querySelector('.adv-description2').innerHTML = langArr['adv-description2'][hash];

  // Третье преимущество
  document.querySelector('.adv-title3').innerHTML = langArr['adv-title3'][hash];
  document.querySelector('.adv-description3').innerHTML = langArr['adv-description3'][hash];

  // Четвёртое преимущество
  document.querySelector('.adv-title4').innerHTML = langArr['adv-title4'][hash];
  document.querySelector('.adv-description4').innerHTML = langArr['adv-description4'][hash];

  // РЕЛОКАЦИЯ
  // ЗАГОЛВООК
  document.querySelector('.relocate-title').innerHTML = langArr['relocate-title'][hash];
  // Описание
  document.querySelector('.relocate-descripton').innerHTML = langArr['relocate-descripton'][hash];

  // Пакет
  document.querySelector('.card__name').innerHTML = langArr['card__name'][hash];
  document.querySelector('.card__name2').innerHTML = langArr['card__name'][hash];
  document.querySelector('.card__name3').innerHTML = langArr['card__name'][hash];
  document.querySelector('.card__name4').innerHTML = langArr['card__name2'][hash];

  document.querySelector('.features1').innerHTML = langArr['features1'][hash];
  document.querySelector('.features2').innerHTML = langArr['features2'][hash];
  document.querySelector('.features3').innerHTML = langArr['features3'][hash];
  document.querySelector('.features4').innerHTML = langArr['features4'][hash];

  document.querySelector('.features5').innerHTML = langArr['features5'][hash];
  document.querySelector('.features6').innerHTML = langArr['features6'][hash];
  document.querySelector('.features7').innerHTML = langArr['features7'][hash];
  document.querySelector('.features8').innerHTML = langArr['features8'][hash];
  document.querySelector('.features9').innerHTML = langArr['features9'][hash];
  document.querySelector('.features10').innerHTML = langArr['features10'][hash];

  document.querySelector('.features11').innerHTML = langArr['features11'][hash];
  document.querySelector('.features12').innerHTML = langArr['features12'][hash];
  document.querySelector('.features13').innerHTML = langArr['features13'][hash];
  document.querySelector('.features14').innerHTML = langArr['features14'][hash];
  document.querySelector('.features15').innerHTML = langArr['features15'][hash];
  document.querySelector('.features16').innerHTML = langArr['features16'][hash];
  document.querySelector('.features17').innerHTML = langArr['features17'][hash];

  document.querySelector('.features18').innerHTML = langArr['features18'][hash];
  document.querySelector('.features19').innerHTML = langArr['features19'][hash];
  document.querySelector('.features20').innerHTML = langArr['features20'][hash];
  document.querySelector('.features21').innerHTML = langArr['features21'][hash];
  document.querySelector('.features22').innerHTML = langArr['features22'][hash];
  document.querySelector('.features23').innerHTML = langArr['features23'][hash];

  // ОБЪЕКТЫ
  // ЗАГОЛОВОК
  document.querySelector('.object-title').innerHTML = langArr['object-title'][hash];

  document.querySelector('.item__label').innerHTML = langArr['item__label'][hash];
  document.querySelector('.item__square').innerHTML = langArr['item__square'][hash];
  document.querySelector('.item__cost').innerHTML = langArr['item__cost'][hash];
  document.querySelector('.item__city').innerHTML = langArr['item__city'][hash];

  document.querySelector('.item__label2').innerHTML = langArr['item__label2'][hash];
  document.querySelector('.item__square2').innerHTML = langArr['item__square2'][hash];
  document.querySelector('.item__cost2').innerHTML = langArr['item__cost2'][hash];
  document.querySelector('.item__city2').innerHTML = langArr['item__city2'][hash];

  document.querySelector('.item__label3').innerHTML = langArr['item__label3'][hash];
  document.querySelector('.item__square3').innerHTML = langArr['item__square3'][hash];
  document.querySelector('.item__cost3').innerHTML = langArr['item__cost3'][hash];
  document.querySelector('.item__city3').innerHTML = langArr['item__city3'][hash];

  document.querySelector('.item__label4').innerHTML = langArr['item__label4'][hash];
  document.querySelector('.item__square4').innerHTML = langArr['item__square4'][hash];
  document.querySelector('.item__cost4').innerHTML = langArr['item__cost4'][hash];
  document.querySelector('.item__city4').innerHTML = langArr['item__city4'][hash];

  document.querySelector('.item__label5').innerHTML = langArr['item__label5'][hash];
  document.querySelector('.item__square5').innerHTML = langArr['item__square5'][hash];
  document.querySelector('.item__cost5').innerHTML = langArr['item__cost5'][hash];
  document.querySelector('.item__city5').innerHTML = langArr['item__city5'][hash];

  document.querySelector('.item__label6').innerHTML = langArr['item__label6'][hash];
  document.querySelector('.item__square6').innerHTML = langArr['item__square6'][hash];
  document.querySelector('.item__cost6').innerHTML = langArr['item__cost6'][hash];
  document.querySelector('.item__city6').innerHTML = langArr['item__city6'][hash];

  document.querySelector('.item__label7').innerHTML = langArr['item__label7'][hash];
  document.querySelector('.item__square7').innerHTML = langArr['item__square7'][hash];
  document.querySelector('.item__cost7').innerHTML = langArr['item__cost7'][hash];
  document.querySelector('.item__city7').innerHTML = langArr['item__city7'][hash];

  document.querySelector('.item__label8').innerHTML = langArr['item__label8'][hash];
  document.querySelector('.item__square8').innerHTML = langArr['item__square8'][hash];
  document.querySelector('.item__cost8').innerHTML = langArr['item__cost8'][hash];
  document.querySelector('.item__city8').innerHTML = langArr['item__city8'][hash];

  document.querySelector('.item__label9').innerHTML = langArr['item__label9'][hash];
  document.querySelector('.item__square9').innerHTML = langArr['item__square9'][hash];
  document.querySelector('.item__cost9').innerHTML = langArr['item__cost9'][hash];
  document.querySelector('.item__city9').innerHTML = langArr['item__city9'][hash];

  // ЧЕКБОКС
  document.querySelector('.checkbox__text').innerHTML = langArr['checkbox__text'][hash];

  // ФОРМА
  // ЗАГОЛОВОК
  document.querySelector('.title-request').innerHTML = langArr['title-request'][hash];

  document.querySelector('.text-1').innerHTML = langArr['text-1'][hash];
  document.querySelector('.text-2').innerHTML = langArr['text-2'][hash];
  document.querySelector('.request-description').innerHTML = langArr['request-description'][hash];

  document.querySelector('.form__title').innerHTML = langArr['form__title'][hash];
  document.querySelector('.form__description').innerHTML = langArr['form__description'][hash];

  // ИНПУТ ИМЯ
  var inputName = document.querySelector('.input__name');
  inputName.placeholder = langArr['input__name'][hash];
  // ИНПУТ ПОЧТА
  var inputEmail = document.querySelector('.input__email');
  inputEmail.placeholder = langArr['input__email'][hash];
  // ИНПУТ ТЕЛЕФОН
  var inputPhone = document.querySelector('.input__phone');
  inputPhone.placeholder = langArr['input__phone'][hash];

  // ИЗМЕНЕНИЕ КНОПКИ ОТПРАВИТЬ
  document.querySelector('.button-send').innerHTML = langArr['button-send'][hash];
}

changeLanguage();
