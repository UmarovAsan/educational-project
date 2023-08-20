// Функция для бургер меню
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function()
    {
        document.querySelector(".header").classList.toggle("open")
    })
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector(".header").classList.remove("open")
    }
});

document.getElementById("header__nav-menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".header").classList.remove("open")
});

const navLinks = document.querySelectorAll('.header__list-link');

const burgerButton = document.getElementById('burger');

const header = document.getElementById('header');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
  });
});


// Функция для открытия меню
const menuButton = document.querySelector('.header__menu');
const menuList = document.querySelector('.menu-list');

menuButton.addEventListener('click', () => {
menuList.classList.toggle('menu-list--active');
});

document.addEventListener('click', (event) => {
    const isMenuClicked = menuButton.contains(event.target) || menuList.contains(event.target);

    if (!isMenuClicked && menuList.classList.contains('menu-list--active')) {
        menuList.classList.remove('menu-list--active');
    }
});


const aboutSlider = document.querySelector('.about-slider');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const btnButton = document.querySelectorAll('.btn'); // Correct the selector
let position = 0;
let btnIndex = 0; // Change dotIndex to btnIndex

const slideWidth = 450 + 25; // Adjust this value to match the width of your slides

const updateButtons = () => {
    if (btnIndex === 0) {
        leftButton.disabled = true;
    } else {
        leftButton.disabled = false;
    }

    if (btnIndex === btnButton.length - 1) { // Correct the variable name here
        rightButton.disabled = true;
    } else {
        rightButton.disabled = false;
    }
};

const nextSlide = () => {
    if (btnIndex < btnButton.length - 1) { // Correct the variable name here
        position += slideWidth;
        btnIndex++; // Change about-buttonIndex to btnIndex
        updateButtons();
    }
    aboutSlider.style.left = -position + 'px';
    thisSlide(btnIndex);
};

const prevSlide = () => {
    if (btnIndex > 0) {
        position -= slideWidth;
        btnIndex--;
        updateButtons();
    }
    aboutSlider.style.left = -position + 'px';
    thisSlide(btnIndex);
};

const thisSlide = (index) => {
    for (let btn of btnButton) { // Correct the variable name here
        btn.classList.remove('active');
    }
    btnButton[index].classList.add('active'); // Correct the variable name here
};

leftButton.addEventListener('click', prevSlide);
rightButton.addEventListener('click', nextSlide);

btnButton.forEach((btn, index) => { // Correct the variable name here
    btn.addEventListener('click', () => {
        position = slideWidth * index;
        aboutSlider.style.left = -position + 'px';
        btnIndex = index;
        thisSlide(btnIndex);
        updateButtons();
    });
});

// Initialize button states
updateButtons();




// const aboutSlider = document.querySelector('.about-slides-item');
// const prevButton = document.querySelector('.about-button-left');
// const nextButton = document.querySelector('.about-button-right');
// const aboutButtons = document.querySelectorAll('.buttoncontrol');
// let position = 0;
// let buttoncontrolIndex = 0;

// const nextSlide = () => {
//     if (position < (aboutButtons - 1) * 475) {
//         position += 475
//         buttoncontrolIndex++
//     } else {
//         position = 0
//         buttoncontrolIndex = 0
//     }
//     aboutSlider.style.left = -position + 'px'
//     thisSlide(buttoncontrolIndex)
// };
// const prevSlide = () => {
//     if (position > 0) {
//         position -= 475
//         buttoncontrolIndex--
//     } else {
//         position = 0
//         buttoncontrolIndex = 0
//     }
//     aboutSlider.style.left = -position + 'px'
//     thisSlide(buttoncontrolIndex)
// };
// const thisSlide = (index) => {
//     for (let buttoncontrol of aboutButtons) {
//         buttoncontrol.classList.remove('active')
//     }
//     aboutButtons[index].classList.add('active')
// };


// prevButton.addEventListener('click', prevSlide)
// nextButton.addEventListener('click', nextSlide)

// aboutButtons.forEach((buttoncontrol, index) => {
//     buttoncontrol.addEventListener('click', () => {
//         position = 475 * index
//         aboutSlider.style.left = -position + 'px'
//         buttoncontrolIndex = index
//         thisSlide(buttoncontrolIndex)
//     })
// });



// const aboutSlider = document.querySelector('.about-slides-item');
// const prevButton = document.querySelector('.about-button-left');
// const nextButton = document.querySelector('.about-button-right');
// const aboutButtons = document.querySelectorAll('.buttoncontrol');
// let position = 0;
// let buttoncontrolIndex = 0;

// const nextSlide = () => {
//   if (buttoncontrolIndex < aboutButtons.length - 1) {
//     buttoncontrolIndex++;
//     position -= 475; // Adjust this value to control the slide width
//     updateSlider();
//   }
// };

// const prevSlide = () => {
//   if (buttoncontrolIndex > 0) {
//     buttoncontrolIndex--;
//     position += 475; // Adjust this value to control the slide width
//     updateSlider();
//   }
// };

// const updateSlider = () => {
//   aboutSlider.style.left = position + 'px';
//   aboutButtons.forEach((button, index) => {
//     if (index === buttoncontrolIndex) {
//       button.classList.add('active');
//     } else {
//       button.classList.remove('active');
//     }
//   });
// };

// nextButton.addEventListener('click', nextSlide);
// prevButton.addEventListener('click', prevSlide);

// aboutButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     buttoncontrolIndex = index;
//     position = -index * 475; // Adjust this value to control the slide width
//     updateSlider();
//   });
// });



// const buttonControls = document.querySelectorAll(".button-control");
// const slidesContainer = document.querySelector(".about-slides-item");
// const slideWidth = slidesContainer.offsetWidth;

// let currentIndex = 0;

// buttonControls.forEach((button) => {
//   button.addEventListener("click", () => {
//     const slideIndex = parseInt(button.getAttribute("data-slide-index"));
//     currentIndex = slideIndex;
//     updateSlide();
//     updateActiveButton();
//   });
// });

// function updateSlide() {
//   const offset = -currentIndex * slideWidth;
//   slidesContainer.style.transform = `translateX(${offset}px)`;
// }

// function updateActiveButton() {
//   buttonControls.forEach((button, index) => {
//     if (index === currentIndex) {
//       button.classList.add("active");
//     } else {
//       button.classList.remove("active");
//     }
//   });
// }

// // Initial slide
// updateSlide();
// updateActiveButton();




// // Второй слайдер
// const secondSliderContainer = document.querySelector('.about__button-control');
// const controlButtons = secondSliderContainer.querySelectorAll('button');

// // Устанавливаем начальный индекс слайда для второго слайдера
// let currentSecondSlideIndex = 0;

// // Обработчики для кнопок управления второго слайдера
// controlButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     currentSecondSlideIndex = index;
//     updateSecondSlider();
//   });
// });



// // Функция для обновления второго слайдера
// function updateSecondSlider() {
//   for (let i = 0; i < controlButtons.length; i++) {
//     if (i === currentSecondSlideIndex) {
//       controlButtons[i].classList.add('active');
//     } else {
//       controlButtons[i].classList.remove('active');
//     }
//   }
// }


// // Инициализация второго слайдера
// updateSecondSlider();





// // Получаем элементы слайдера и кнопки
// const sliderContainer = document.querySelector('.about-slides-item');
// const prevButton = document.querySelector('.about-button-left');
// const nextButton = document.querySelector('.about-button-right');
// const images = sliderContainer.querySelectorAll('img'); // Получаем все изображения в слайдере

// // Устанавливаем начальный индекс слайда
// let currentSlideIndex = 0;

// // Обработчик для кнопки "Next"
// nextButton.addEventListener('click', () => {
//   currentSlideIndex = (currentSlideIndex + 1) % images.length;
//   updateSlider();
// });

// // Обработчик для кнопки "Previous"
// prevButton.addEventListener('click', () => {
//   currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
//   updateSlider();
// });

// // Функция для обновления слайдера
// function updateSlider() {
//   for (let i = 0; i < images.length; i++) {
//     const slide = images[i];
//     if (i === currentSlideIndex) {
//       slide.style.display = 'block';
//     } else {
//       slide.style.display = 'none';
//     }
//   }
  
//   // Деактивация кнопок на первой и последней картинках
//   prevButton.disabled = currentSlideIndex === 0;
//   nextButton.disabled = currentSlideIndex === images.length - 1;
// }

// // Инициализация слайдера
// updateSlider();



// //второй слайдер
// const sliderContainer = document.querySelector('.about__button-control');
// const controlButtons = sliderContainer.querySelectorAll('button');

// // Устанавливаем начальный индекс слайда
// let currentSlideIndex = 0;

// // Обработчики для кнопок управления
// controlButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     currentSlideIndex = index;
//     updateSlider();
//   });
// });

// // Функция для обновления слайдера
// function updateSlider() {
//   for (let i = 0; i < controlButtons.length; i++) {
//     if (i === currentSlideIndex) {
//       controlButtons[i].classList.add('active');
//     } else {
//       controlButtons[i].classList.remove('active');
//     }
//   }
// }

// // Инициализация слайдера
// updateSlider();


// const buttonControlContainer = document.querySelector('.about__button-control');
// const controlButtonss = buttonControlContainer.querySelectorAll('.transparent-container');

// function updateButtonControls() {
//   if (window.innerWidth >= 1440) {
//     // Отображать все пять кнопок на широких экранах
//     controlButtonss.forEach(button => button.style.display = index < 3 ? 'block' : 'none');
//   } else if (window.innerWidth >= 915) {
//     // Отображать четыре кнопки на средних экранах
//     controlButtonss.forEach((button, index) => button.style.display = index < 4 ? 'block' : 'none');
//   } else {
//     // Отображать три кнопки на узких экранах
//     controlButtonss.forEach((button, index) => button.style.display = index < 3 ? 'block' : 'none');
//   }
// }

// // Обновляем кнопки при загрузке страницы и изменении размера экрана
// window.addEventListener('resize', updateButtonControls);
// updateButtonControls();



// leftButton.addEventListener('click', showPreviousSlide);
// centerButton.addEventListener('click', showNextSlide);
// rightButton.addEventListener('click', showNextSlide);
// fourButton.addEventListener('click', showNextSlide);
// fiveButton.addEventListener('click', showNextSlide);

//не активные крайние кнопки
// leftButton.disabled = currentIndex === 0;
// fiveButton.disabled = currentIndex === images.length - 1;


/*
console.log(" Library#2 Самооценка по пунктам:\n\n" +
    "1 Вёрстка соответствует макету. Ширина экрана 768px +26\n" +
    "   блок <header> +2\n" +
    "   секция Welcome +2\n" +
    "   секция About +4. Обратите внимание на появление новых элементов в виде стрелок и переход на 5 точек вместо 3х.
            ❗Не нужно менять расстояние от картинки до точек, нужно оставить 40px. Оценку не снижаем, если сделано по макету (25px).\n" +
    "   секция Favorites +2
            ❗Сделать кнопку own, вместо buy для последней книги. Здесь важно будет соблюсти условие, что, какие кнопки находились в состояние "own" на Desktop, те же кнопки в том же состоянии будут и на Tablet. Если условие соблюдено: +2\n" +
    "   секция CoffeShop +4
            ❗Оценка снижаться не будет, если при наложении текста, не будет совпадать расположение букв, расстояние между символами, начало и конец строки, а так же орфография. Будут оцениваться межстрочный интервал, шрифт и центрирование блока с текстом по общим правилам.\n" +
    "   секция Contacts +4\n" +
    "   секция LibraryCard +4\n" +
    "   блок <footer> + 2\n" +
    "   Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n" +
    "2 Нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.\n" +
    "   элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.
            элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4. Например, меню в хедере должно преобразоваться в бургер-меню до того, как элементы начнут наезжать друг на друга.
            все что будет происходить на ширине свыше 1440px - не оценивается. Поэтому можно либо растягивать на весь экран, либо оставить центральной колонкой.\n" +
    "3 На ширине экрана 768рх реализовано адаптивное меню +12 
            (Рекомендуется сделать появление бургер-меню на ширине 1024px): Eсли при ширине страницы в 768рх панель навигации не скрыта, а бургер-иконка не появилась (при этом учитывайте "Особенности проверки адаптивности в DevTools"), то ставим 0 за данный пункт, и дальше его не проверяем. Иначе:
        ❗Версия Tablet, отступ иконки юзера от правого края - 105px. Такое же расстояние надо сделать и у открытого меню (сейчас там 92px). Сам крест желательно отцентрировать по поцентральной позиции бургер-иконки. Чтобы при переходе из одного состояния в другое ничего не прыгало. Само меню нужно прижать к правому краю целиком. Если иконка юзера не прыгает (не меняет позиции при открытии меню), независимо от величины отступа: +2
            ❗Цвет выпавшего меню должен совпадать с цветом полоски навигации. Оценка снижаться не будет, если сделано по первому макету (#000000).\n" +
    "   при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n" +
    "   при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +2\n" +
    "   ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +2\n" +
    "   размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2\n" +
    "Критерии оценки
     Максимальная оценка за задание 50 баллов\n" +
*/
/*
console.log(" Library#1 Самооценка по пунктам:\n\n" +
    "1 Вёрстка валидная +10\n" +
    "2 Вёрстка семантическая +16\n" +
    "   1. header, main, footer +2\n" +
    "   2. шесть элементов section по количеству секций +2\n" +
    "   3. только один заголовок h1 +2\n" +
    "   4. пять заголовков h2 +2\n" +
    "   5. один элемент nav +2\n" +
    "   6. два списка ul li a +2\n" +
    "   7. семь кнопок button +2\n" +
    "   8. два инпута input +2\n" +
    "3 Вёрстка соответствует макету +54\n" +
    "   блок header +8\n" +
    "   секция Welcome +4\n" +
    "   секция About +6\n" +
    "   секция Favorites +8\n" +
    "   секция CoffeShop +6\n" +
    "   секция Contacts +6\n" +
    "   секция LibraryCard +8\n" +
    "   блок footer +8\n" +
    "4 Общие требования к верстке +20\n" +
    "   используются флексы или гриды +2\n" +
    "   при уменьшении масштаба страницы браузера вся вёрстка контент и фоны размещается по центру, а не сдвигается в сторону +2\n" +
    "   Фон за рамками страницы может быть черным, белым или любого оттенка серого.\n" +
    "   иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n" +
    "   изображения добавлены в формате .jpg .jpeg или .png +2\n" +
    "   есть favicon +2. Иконка должна содержать 3 буквы 'BPL'\n" +
    "   плавная прокрутка по якорям +2\n" +
    "   в футере название ссылки Username заменено и ведет на GitHub студента +2\n" +
    "   в футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2\n" +
    "   интерактивность элементов согласно макету. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта +2\n" +
    "   обязательное требование к интерактивности плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2\n" +
    "Итого: 100 баллов\n");
    */