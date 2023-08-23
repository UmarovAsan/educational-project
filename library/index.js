document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function()
    {
        document.querySelector("header").classList.toggle("open")
    })
});

//Закрыть меню при нажатие на Escape
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector(".header").classList.remove("open")
    }
});

//Закрыть меню при клике вне его
document.getElementById("header__nav-menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    //действие при клике
    document.querySelector("header").classList.remove("open")
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
    

// Слайдер для About
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


//Слайдер для Favorit
const winterSlider = document.getElementById('winter-slider');
const springSlider = document.getElementById('spring-slider');
const summerSlider = document.getElementById('summer-slider');
const autumnSlider = document.getElementById('autumn-slider');

const winterRadio = document.getElementById('winter');
const springRadio = document.getElementById('spring');
const summerRadio = document.getElementById('summer');
const autumnRadio = document.getElementById('autumn');

function toggleSliderVisibility() {
    winterSlider.style.opacity = 0;
    springSlider.style.opacity = 0;
    summerSlider.style.opacity = 0;
    autumnSlider.style.opacity = 0;

    if (winterRadio.checked) {
        winterSlider.style.opacity = 1;
    } else if (springRadio.checked) {
        springSlider.style.opacity = 1;
    } else if (summerRadio.checked) {
        summerSlider.style.opacity = 1;
    } else if (autumnRadio.checked) {
        autumnSlider.style.opacity = 1;
    }
}

// Initial call to set the correct slider visibility on page load
toggleSliderVisibility();

// Add event listeners to the radio buttons to handle changes
winterRadio.addEventListener('change', toggleSliderVisibility);
springRadio.addEventListener('change', toggleSliderVisibility);
summerRadio.addEventListener('change', toggleSliderVisibility);
autumnRadio.addEventListener('change', toggleSliderVisibility);


$(document).ready(function() {
// Listen for radio button changes
    $("input[type='radio']").change(function() {
        var selectedSeason = $("input[name='season']:checked").attr("id");

        // Hide all sliders
        $(".fade-out").css("opacity", 0);
        $(".fade-out").css("pointer-events", "none");

        // Show the selected slider
        $("#" + selectedSeason + "-slider").css("opacity", 1);
        $("#" + selectedSeason + "-slider").css("pointer-events", "auto");
    });
});


//Функция для появления окна регистрации
const registerButton = document.getElementById('register-button')
const registrationWindow = document.getElementById('register-window')
const closeRegisterBtn = document.getElementById('close-btn')

registrationWindow.style.opacity = 0;



/*
console.log("Самооценка по пунктам:\n\n" +
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