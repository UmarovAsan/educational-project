const overlay = document.getElementById('overlay');

// кнопки меню регистрации
const headerMenu = document.getElementById('headerMenu');
// меню регистрации
const menuRegistration = document.getElementById('menuRegistration')

// кнопка открытия окна регистрации
const registerButton = document.getElementById('registerButton')

// окно регистрации
const registerWindow = document.getElementById('registerWindow');
const registerCloseButton = document.getElementById('registerCloseButton');
const registrationBtn = document.getElementById('registrationBtn');

// кнопка открытия окна авторизации
const loginButton = document.getElementById('loginButton');

// окно авторизации
const loginWindow = document.getElementById('loginWindow');
const loginCloseButton = document.getElementById('loginCloseButton');
const authorizationBtn = document.getElementById('authorizationBtn');

// кнопка покупки книги
const purchaseButtons = document.querySelectorAll('.buttonBuy');

// кнопка открытия окна регистрации
const registrationBtnCard = document.getElementById('registrationBtnCard');

// кнопка открытия окна авторизации
const authorizationBtnCard = document.getElementById('authorizationBtnCard');

function openWindowWithVisibility(window) {
    window.style.visibility = 'visible';
    window.style.opacity = '1';
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
}

function closeWindowWithVisibility(window) {
    window.style.visibility = 'hidden';
    window.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
}

function closeAndOpenWindows(openWindow, closeWindow) {
    openWindowWithVisibility(openWindow);
    closeWindowWithVisibility(closeWindow);
}

headerMenu.addEventListener('click', () => {
    openWindowWithVisibility(menuRegistration);
    overlay.style.visibility = 'hidden';
});

registerButton.addEventListener('click', () => {
    closeAndOpenWindows(registerWindow, loginWindow);
    closeWindowWithVisibility(menuRegistration);
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
});

loginButton.addEventListener('click', () => {
    closeAndOpenWindows(loginWindow, registerWindow);
    closeWindowWithVisibility(menuRegistration);
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
});

registerCloseButton.addEventListener('click', () => {
    closeWindowWithVisibility(registerWindow);
});

loginCloseButton.addEventListener('click', () => {
    closeWindowWithVisibility(loginWindow);
});

registrationBtn.addEventListener('click', () => {
    closeAndOpenWindows(registerWindow, loginWindow);
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
});

authorizationBtn.addEventListener('click', () => {
    closeAndOpenWindows(loginWindow, registerWindow);
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
});

registrationBtnCard.addEventListener('click', () => {
    openWindowWithVisibility(registerWindow);
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
});

authorizationBtnCard.addEventListener('click', () => {
    openWindowWithVisibility(loginWindow);
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
});

purchaseButtons.forEach(button => {
    button.addEventListener('click', () => {
        openWindowWithVisibility(loginWindow);
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
    });
});

// закрытие окон при клике вне окон
document.addEventListener('mousedown', (event) => {
    const target = event.target;

    // элементы при клие на которые не должны закрываться окна
    const elementsToExclude = [
        menuRegistration,
        registerWindow,
        loginWindow,
        headerMenu,
        registerButton,
        loginButton,
        registrationBtn,
        loginCloseButton,
        authorizationBtn,
        registrationBtnCard,
        authorizationBtnCard
    ];

    // проверка на клик вне окон
    const isClickOutside = !elementsToExclude.some(element => element.contains(target));

    if (isClickOutside) {
        // закрытие окна
        closeWindowWithVisibility(menuRegistration);
        closeWindowWithVisibility(registerWindow);
        closeWindowWithVisibility(loginWindow);
    }
});
//========================================================================

//функция открытия бургер меню
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open");
        // Close the menuRegistration window if it is open
        if (menuRegistration.style.visibility === 'visible') {
            closeWindowWithVisibility(menuRegistration);
        }
    });
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

//=======================================================================

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
//========================================================================

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
//========================================================================

//валидация email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

document.getElementById('registerSubmit').addEventListener('click', (event) => {
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('registerEmail');
    const passwordInput = document.getElementById('registerPassword');

    // Очищаем все классы input перед проверкой
    firstNameInput.classList.remove("input-error");
    lastNameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Проверяем заполненность полей
    if (email === "" || password === "") {
        alert("Заполните все поля.");
        return;
    }

    if (firstName === "") {
        alert("Заполните поле firstName");
        return;
    }

    if (lastName === "") {
        alert("Заполните поле lastName");
        return;
    }

    // Проверяем валидность email
    if (!validateEmail(email)) {
        emailInput.focus();
        alert("Пожалуйста, введите корректный адрес электронной почты.");
        return;
    }

    // Проверяем длину пароля
    if (password.length < 8) {
        passwordInput.focus();
        alert("Пароль должен быть не короче 8 символов.");
        return;
    }

    const user = new User(firstName, lastName, email, password);
    saveUserToLocalStorage(user);
    console.log("User registered:", user);

    // Очищаем поля ввода после успешной регистрации
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    // После успешной регистрации вызываем функцию для изменения иконки пользователя
    // handleRegistrationSuccess(user);
});
  
  
function User(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
}
//========================================================================

// функция регистрации
// Функция для сохранения данных пользователя в localStorage
function saveUserToLocalStorage(user) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const existingUser = Object.values(users).find(u => u.email === user.email);

    if (existingUser) {
        alert('Пользователь с таким адресом электронной почты уже существует.');
        return; // Выходим из функции, не сохраняя пользователя
    }

    const userId = "User" + createId(users);
    users[userId] = user;
    localStorage.setItem('users', JSON.stringify(users));
}

function createId(users) {
    return Object.keys(users).length;
}

// After successful login
localStorage.setItem('sessionToken', 'your-session-token-here');


const sessionToken = localStorage.getItem('sessionToken');
if (sessionToken) {
    // The user is authenticated; you can fetch their profile or display the user-specific content.
}

localStorage.removeItem('sessionToken');
//========================================================================

// функция входа в личный профиль
document.getElementById('registerSubmit').addEventListener('click', (event) => {
    event.preventDefault();
    
    // ... Остальной код регистрации ...
    const registerWindow = document.getElementById('registerWindow')
    registerWindow.style.visibility = 'hidden'
    overlay.style.visibility = 'hidden'

    // Скрываем элемент с классом "header__menu-container" с помощью visibility
    const menuContainer = document.querySelector('.header__menu-container');
    menuContainer.style.visibility = 'hidden';

    // Показываем элемент с классом "header__menu-containertwo" с помощью visibility
    const menuContainerTwo = document.querySelector('.header__menu-containertwo');
    menuContainerTwo.style.visibility = 'visible';

    // ... Остальной код после успешной регистрации ...
    // Находим кнопку "profilMenu" и меню "menuAuthorization"
    const profilMenuButton = document.getElementById('profilMenu');
    const menuAuthorization = document.getElementById('menuAuthorization');

    // Добавляем обработчик события клика на кнопку "profilMenu"
    profilMenuButton.addEventListener('click', () => {
        // Переключаем видимость меню "menuAuthorization"
        if (menuAuthorization.style.visibility === 'visible') {
            // Если меню видимо, скрываем его
            menuAuthorization.style.visibility = 'hidden';
        } else {
            // Если меню скрыто, показываем его
            menuAuthorization.style.visibility = 'visible';
        }
    });

    // Добавьте обработчик события клика вне окон
    document.addEventListener('mousedown', (event) => {
        const target = event.target;

        // Элементы, при клике на которые не должны закрываться окна
        const elementsToExclude = [
            menuAuthorization,
            profilMenuButton,
            logOutButton,
        ];

        // Проверка на клик вне окон
        const isClickOutside = !elementsToExclude.some(element => element.contains(target));

        if (isClickOutside) {
            // Закрываем меню профиля (menuAuthorization)
            menuAuthorization.style.visibility = 'hidden';
        }
    });

    // Находим кнопку "Log Out"
    const logOutButton = document.getElementById('logOutButton');

    // Добавляем обработчик события клика на кнопку "Log Out"
    logOutButton.addEventListener('click', () => {
        // Скрываем элемент "header__menu-containertwo"
        const menuContainertwo = document.querySelector('.header__menu-containertwo');
        menuContainertwo.style.visibility = 'hidden';

        // Показываем элемент "header__menu-container"
        const menuContainer = document.querySelector('.header__menu-container');
        menuContainer.style.visibility = 'visible';

        // Скрываем элемент "menuRegistration"
        const menuAuthorization = document.getElementById('menuAuthorization');
        menuAuthorization.style.visibility = 'hidden';
    });
});

function handleRegistrationSuccess(firstName, lastName) {
    // Извлекаем элемент <span> с классом "user-initials"
    const userInitialsSpan = document.querySelector('.user-initials');
    // Устанавливаем содержимое <span> на первые буквы FirstName и LastName
    userInitialsSpan.textContent = `${firstName[0]}${lastName[0]}`;
}
// После успешной регистрации вызываем функцию для изменения иконки пользователя
handleRegistrationSuccess(firstName, lastName);
//========================================================================
// открытие окна профиля меню
const profileButton = document.getElementById('profileButton');
const profileContainer = document.getElementById('profileContainer');
const profileCloseButton = document.querySelector('.profileCloseBtn');
const menuAuthorization = document.getElementById('menuAuthorization');
const logOutButton = document.getElementById('logOutButton');
const headerMenuContainerTwo = document.querySelector('header__menu-containertwo'); // Added "document."
const headerMenuContainer = document.querySelector('header__menu-container'); // Added "document."
const profilMenu = document.getElementById('profilMenu');

// Функция для открытия окна профиля
function openProfileContainer() {
    profileContainer.style.visibility = 'visible';
    profileContainer.style.opacity = '1';
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    menuAuthorization.style.visibility = 'hidden';
}

// Функция для закрытия окна профиля
function closeProfileContainer() {
    profileContainer.style.visibility = 'hidden';
    profileContainer.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
}

profileButton.addEventListener('click', openProfileContainer);
profileCloseButton.addEventListener('click', closeProfileContainer);

document.addEventListener('mousedown', (event) => {
    const target = event.target;

    // Элементы, при клике на которые не должны закрываться окна
    const elementsToExclude = [
        profilMenu,
        menuAuthorization,
        profileButton,
        logOutButton,
        profileContainer,
        profileCloseButton,
        menuRegistration,
        registerWindow,
        loginWindow,
        headerMenu,
        registerButton,
        loginButton,
        registrationBtn,
        loginCloseButton,
        authorizationBtn,
        registrationBtnCard,
        authorizationBtnCard
    ];

    // Проверка на клик вне окон
    const isClickOutside = !elementsToExclude.some(element => element.contains(target));

    if (isClickOutside) {
        // Закрытие окна профиля
        closeProfileContainer();
    }
});
//=====================================================================
// Функция для входа в личный профиль
function login() {
    const loginEmailInput = document.getElementById('loginEmail');
    const loginPasswordInput = document.getElementById('loginPassword');

    const enteredEmail = loginEmailInput.value.trim();
    const enteredPassword = loginPasswordInput.value.trim();

    // Получаем данные пользователя из localStorage по email
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const user = Object.values(users).find(u => u.email === enteredEmail);

    if (!user) {
        alert('Пользователь с таким email не найден.');
        return;
    }

    if (enteredPassword === user.password) {
        // Вход выполнен успешно, скрываем окно входа и показываем личный профиль
        function closeLoginWindow() {
            const loginWindow = document.getElementById('loginWindow');
            loginWindow.style.visibility = 'hidden';
        }
        
        closeLoginWindow(); // функция, которая скроет окно входа
        
        function showProfile() {
            const profileContainer = document.getElementById('profileContainer');
            const overlay = document.getElementById('overlay');
            profileContainer.style.visibility = 'visible';
            overlay.style.visibility = 'visible';
        }
        
        showProfile(); // функция, которая покажет личный профиль
    } else {
        alert('Неверный пароль.');
    }

    // Скрываем элемент с классом "header__menu-container" с помощью visibility
    const menuContainer = document.querySelector('.header__menu-container');
    menuContainer.style.visibility = 'hidden';

    // Показываем элемент с классом "header__menu-containertwo" с помощью visibility
    const menuContainerTwo = document.querySelector('.header__menu-containertwo');
    menuContainerTwo.style.visibility = 'visible';

    // ... Остальной код после успешной регистрации ...
    // Находим кнопку "profilMenu" и меню "menuAuthorization"
    const profilMenuButton = document.getElementById('profilMenu');
    const menuAuthorization = document.getElementById('menuAuthorization');

    // Добавляем обработчик события клика на кнопку "profilMenu"
    profilMenuButton.addEventListener('click', () => {
        // Переключаем видимость меню "menuAuthorization"
        if (menuAuthorization.style.visibility === 'visible') {
            // Если меню видимо, скрываем его
            menuAuthorization.style.visibility = 'hidden';
        } else {
            // Если меню скрыто, показываем его
            menuAuthorization.style.visibility = 'visible';
        }
    });

    // Добавьте обработчик события клика вне окон
    document.addEventListener('mousedown', (event) => {
        const target = event.target;

        // Элементы, при клике на которые не должны закрываться окна
        const elementsToExclude = [
            menuAuthorization,
            profilMenuButton,
            logOutButton,
        ];

        // Проверка на клик вне окон
        const isClickOutside = !elementsToExclude.some(element => element.contains(target));

        if (isClickOutside) {
            // Закрываем меню профиля (menuAuthorization)
            menuAuthorization.style.visibility = 'hidden';
        }
    });

    // Находим кнопку "Log Out"
    const logOutButton = document.getElementById('logOutButton');

    // Добавляем обработчик события клика на кнопку "Log Out"
    logOutButton.addEventListener('click', () => {
        // Скрываем элемент "header__menu-containertwo"
        const menuContainertwo = document.querySelector('.header__menu-containertwo');
        menuContainertwo.style.visibility = 'hidden';

        // Показываем элемент "header__menu-container"
        const menuContainer = document.querySelector('.header__menu-container');
        menuContainer.style.visibility = 'visible';

        // Скрываем элемент "menuRegistration"
        const menuAuthorization = document.getElementById('menuAuthorization');
        menuAuthorization.style.visibility = 'hidden';
    });
}

// Добавляем обработчик события клика на кнопку "Log In"
document.getElementById('loginSubmit').addEventListener('click', (event) => {
    event.preventDefault();
    login();
});


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