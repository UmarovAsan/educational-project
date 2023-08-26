//функция открытия бургер меню
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
const btnButton = document.querySelectorAll('.btn');
let position = 0;
let btnIndex = 0;

const slideWidth = 450 + 25;

const updateButtons = () => {
    if (btnIndex === 0) {
        leftButton.disabled = true;
    } else {
        leftButton.disabled = false;
    }

    if (btnIndex === btnButton.length - 1) {
        rightButton.disabled = true;
    } else {
        rightButton.disabled = false;
    }
};

const nextSlide = () => {
    if (btnIndex < btnButton.length - 1) {
        position += slideWidth;
        btnIndex++;
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
    for (let btn of btnButton) {
        btn.classList.remove('active');
    }
    btnButton[index].classList.add('active');
};

leftButton.addEventListener('click', prevSlide);
rightButton.addEventListener('click', nextSlide);

btnButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        position = slideWidth * index;
        aboutSlider.style.left = -position + 'px';
        btnIndex = index;
        thisSlide(btnIndex);
        updateButtons();
    });
});

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

toggleSliderVisibility();

winterRadio.addEventListener('change', toggleSliderVisibility);
springRadio.addEventListener('change', toggleSliderVisibility);
summerRadio.addEventListener('change', toggleSliderVisibility);
autumnRadio.addEventListener('change', toggleSliderVisibility);


$(document).ready(function() {
    $("input[type='radio']").change(function() {
        var selectedSeason = $("input[name='season']:checked").attr("id");

        $(".fade-out").css("opacity", 0);
        $(".fade-out").css("pointer-events", "none");

        $("#" + selectedSeason + "-slider").css("opacity", 1);
        $("#" + selectedSeason + "-slider").css("pointer-events", "auto");
    });
});


//открытие окна авторизации и регистрации
const registerButton = document.getElementById('registerButton');
const registerWindow = document.getElementById('registerWindow');
const registerCloseButton = document.getElementById('registerCloseButton');
const registrationBtn = document.getElementById('registrationBtn');
const loginButton = document.getElementById('loginButton');
const loginWindow = document.getElementById('loginWindow');
const loginCloseButton = document.getElementById('loginCloseButton');
const authorizationBtn = document.getElementById('authorizationBtn');

// Функция для открытия окна с установкой visibility: visible
function openWindowWithVisibility(window) {
    window.style.visibility = 'visible';
}

// Функция для закрытия окна с установкой visibility: hidden
function closeWindowWithVisibility(window) {
    window.style.visibility = 'hidden';
}

registerButton.addEventListener('click', () => {
    openWindowWithVisibility(registerWindow);
});

registrationBtn.addEventListener('click', () => {
    openWindowWithVisibility(registerWindow);
});

registrationBtn.addEventListener('click', () => {
    closeWindowWithVisibility(loginWindow);
});

registerCloseButton.addEventListener('click', () => {
    closeWindowWithVisibility(registerWindow);
});

loginButton.addEventListener('click', () => {
    openWindowWithVisibility(loginWindow);
});

authorizationBtn.addEventListener('click', () => {
    openWindowWithVisibility(loginWindow);
});

authorizationBtn.addEventListener('click', () => {
    closeWindowWithVisibility(registerWindow);
});

loginCloseButton.addEventListener('click', () => {
    closeWindowWithVisibility(loginWindow);
});


// Закрытие окон при нажатии клавиши Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeWindow(loginWindow);
        closeWindow(registerWindow);
    }
});
// функция регистрации
// Функция для сохранения данных пользователя в localStorage
function saveUserToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem('users')) || {}; // Получаем текущие пользователи из localStorage или создаем пустой объект
    const userId = "User" + createId(users);
    users[userId] = user;
    localStorage.setItem('users', JSON.stringify(users)); // Сохраняем обновленный список пользователей
}

// Функция для создания уникального идентификатора пользователя
function createId(users) {
    return Object.keys(users).length;
}

// Обработчик события submit для формы регистрации
document.getElementById('registerSubmit').addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное действие отправки формы

    const firstNameUser = document.getElementById('firstName').value;
    const lastNameUser = document.getElementById('lastName').value;
    const emailUser = document.getElementById('registerEmail').value;
    const passwordUser = document.getElementById('registerPassword').value;

    const user = new User(firstNameUser, lastNameUser, emailUser, passwordUser);
    saveUserToLocalStorage(user);
    console.log("User registered:", user);

    // Очистка полей формы
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('registerEmail').value = '';
    document.getElementById('registerPassword').value = '';
});

// Функция для создания объекта пользователя
function User(firstName, lastName, registerEmail, registerPassword) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = registerEmail;
    this.password = registerPassword;
}


// Создайте функцию для изменения иконки пользователя
function changeUserIconToNameInitials(firstName, lastName) {
    const userIcon = document.getElementById('userIcon'); // Здесь 'userIcon' - это идентификатор элемента с иконкой пользователя
    if (userIcon) {
        const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
        userIcon.textContent = initials;
    }
}

// После успешной регистрации пользователя, вызовите функцию для изменения иконки
function handleRegistrationSuccess(user) {
    // Ваш код для обработки успешной регистрации
    // ...

    // Вызываем функцию для изменения иконки пользователя
    changeUserIconToNameInitials(user.firstName, user.lastName);
}



//Добавляем обработчик события для клика по документу
// document.addEventListener('click', (event) => {
//     // Закрываем окно регистрации, если клик произошел вне этого окна и вне кнопки "registerButton"
//     if (!registerWindow.contains(event.target) && event.target !== registerButton) {
//         closeWindowWithVisibility(registerWindow);
//     }

//     // Закрываем окно авторизации, если клик произошел вне этого окна и вне кнопки "loginButton"
//     if (!loginWindow.contains(event.target) && event.target !== loginButton) {
//         closeWindowWithVisibility(loginWindow);
//     }
// });



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