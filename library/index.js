const overlay = document.getElementById('overlay');

// кнопки меню регистрации
const headerMenu = document.getElementById('headerMenu');
// меню регистрации
const menuRegistration = document.getElementById('menuRegistration');

// кнопка открытия окна регистрации
const registerButton = document.getElementById('registerButton');

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
//========================================================================
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
        document.querySelector(".header").classList.remove("open");
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
    document.querySelector("header").classList.remove("open");
});
//========================================================================
//========================================================================
//========================================================================
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
//========================================================================
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

function fadeOut(element) {
    let opacity = 1;
    const interval = setInterval(() => {
    if (opacity <= 0) {
        clearInterval(interval);
        element.style.opacity = 0;
        element.style.pointerEvents = 'none'; // Добавляем это свойство, чтобы элемент стал некликабельным при нулевой прозрачности
    } else {
        element.style.opacity = opacity;
        opacity -= 0.09; // Уменьшаем opacity
    }
    }, 0.1);
}

function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = 0;
    element.style.visibility = 'visible';
    const interval = setInterval(() => {
    if (opacity >= 1) {
        clearInterval(interval);
        element.style.opacity = 1;
        element.style.pointerEvents = 'auto'; // Добавляем это свойство, чтобы элемент стал кликабельным при полной прозрачности
    } else {
        element.style.opacity = opacity;
        opacity += 0.01; // Увеличиваем opacity
    }
    }, 0.1);
}

function toggleSliderVisibility() {
    fadeOut(winterSlider);
    fadeOut(springSlider);
    fadeOut(summerSlider);
    fadeOut(autumnSlider);

    if (winterRadio.checked) {
    fadeIn(winterSlider);
    } else if (springRadio.checked) {
    fadeIn(springSlider);
    } else if (summerRadio.checked) {
    fadeIn(summerSlider);
    } else if (autumnRadio.checked) {
    fadeIn(autumnSlider);
    }
}

toggleSliderVisibility();

winterRadio.addEventListener('change', toggleSliderVisibility);
springRadio.addEventListener('change', toggleSliderVisibility);
summerRadio.addEventListener('change', toggleSliderVisibility);
autumnRadio.addEventListener('change', toggleSliderVisibility);
 
//========================================================================
//========================================================================
//========================================================================
const headerMenuContainerTwo = document.querySelector('header__menu-containertwo'); // Added "document."
const headerMenuContainer = document.querySelector('header__menu-container'); // Added "document."


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
}

localStorage.removeItem('sessionToken');
//========================================================================
//========================================================================
//========================================================================
//валидация email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

const cardNumberInput = document.getElementById("card-number-input");
// функция регистрации
// функция входа в личный профиль
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
        alert("Fill in all the fields.");
        return;
    }

    if (firstName === "") {
        alert("Fill in the field firstName");
        return;
    }

    if (lastName === "") {
        alert("Fill in the field lastName");
        return;
    }

    // Проверяем валидность email
    if (!validateEmail(email)) {
        emailInput.focus();
        alert("Please enter a valid email address.");
        return;
    }

    // Проверяем длину пароля
    if (password.length < 8) {
        passwordInput.focus();
        alert("Password must be at least 8 characters.");
        return;
    }

    function User(firstName, lastName, email, password, userHexNumber, visitCount, libraryVisitCount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.userHexNumber = userHexNumber;
        this.visitCount = visitCount;
        this.libraryVisitCount = libraryVisitCount;
    }

    // Генерируем и добавляем девятизначный номер в формате 16-ричного числа
    const randomHexNumber = generateRandomHexNumber();
    localStorage.setItem('userHexNumber', randomHexNumber);

    const user = new User(firstName, lastName, email, password, randomHexNumber, 0, 0);
    user.hexNumber = randomHexNumber;

    saveUserToLocalStorage(user);

    function generateRandomHexNumber() {
        const min = 0x10000000; // Минимальное значение (16^7)
        const max = 0xFFFFFFFF; // Максимальное значение (16^8 - 1)
        const randomHex = Math.floor(Math.random() * (max - min + 1)) + min;
        const upperCaseHex = randomHex.toString(16).toUpperCase(); // Преобразование в верхний регистр
        return upperCaseHex;
    }    

    // Очищаем поля ввода после успешной регистрации
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';


    // ... Остальной код после успешной регистрации ...
    // Обновляем значение элемента <input> с классом "cardNumberProfile"
    const cardNumberProfileInput = document.getElementById('cardNumberProfile');
    cardNumberProfileInput.value = randomHexNumber;

    // Находим кнопку для копирования
    const copyButton = document.querySelector('.cardNumberCopy');

    // Добавляем обработчик события клика на кнопку
    copyButton.addEventListener('click', async () => {
        try {
            // Копируем значение из элемента <input> в буфер обмена
            await navigator.clipboard.writeText(cardNumberProfileInput.value);
            alert('Текст скопирован в буфер обмена.');
        } catch (err) {
            // Обработка ошибки, если копирование не удалось
            alert('Не удалось скопировать текст.');
        }
    });

    registerWindow.style.visibility = 'hidden'
    overlay.style.visibility = 'hidden'

    // Скрываем элемент с классом "header__menu-container" с помощью visibility
    const menuContainer = document.querySelector('.header__menu-container');
    menuContainer.style.visibility = 'hidden';

    // Показываем элемент с классом "header__menu-containertwo" с помощью visibility
    const menuContainerTwo = document.querySelector('.header__menu-containertwo');
    menuContainerTwo.style.visibility = 'visible';

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

    // функцию для изменения иконки пользователя
    function handleRegistrationSuccess(firstName, lastName) {
        // Извлекаем элемент <span> с классом "user-initials"
        const userInitialsSpan = document.querySelector('.user-initials');
        const profilAvatar = document.querySelector('.profilAvatar');
        const profilName = document.querySelector('.profilName');

        // Устанавливаем содержимое элементов на первые буквы FirstName и LastName
        profilAvatar.textContent = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
        profilName.innerHTML = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)}<br />${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`;
        // Устанавливаем содержимое <span> на первые буквы FirstName и LastName
        userInitialsSpan.textContent = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    }
    // После успешной регистрации вызываем функцию для изменения иконки пользователя
    handleRegistrationSuccess(firstName, lastName);
    // ========================================================================

    // Находим элементы для отображения имени и фамилии
    const profileInfoInitials = document.getElementById('profile-info-initials');

    // Проверяем, есть ли имя и фамилия в localStorage
    if (firstName && lastName) {
        // Формируем отображаемый текст (первые буквы заглавные)
        const fullName = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`;
    
        // Устанавливаем текст в элемент profileInfoInitials
        profileInfoInitials.textContent = fullName;
    }

    // Добавляем обработчик события mouseover на кнопку "profilMenu"
    profilMenuButton.addEventListener('mouseover', () => {
        // Показываем элемент profileInfoInitials
        profileInfoInitials.style.display = 'block';
    });

    // Добавляем обработчик события mouseout на кнопку "profilMenu"
    profilMenuButton.addEventListener('mouseout', () => {
        // Скрываем элемент profileInfoInitials
        profileInfoInitials.style.display = 'none';
    });
    ;


    // открытие окна профиля меню
    const profileButton = document.getElementById('profileButton');
    const profileContainer = document.getElementById('profileContainer');
    const profileCloseButton = document.querySelector('.profileCloseBtn');
    // const profilMenu = document.getElementById('profilMenu');

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
        const profileContainer = document.getElementById('profileContainer');
        
        if (!profileContainer.contains(target)) {
            // Закрытие окна profileContainer
            closeProfileContainer();
        }
    });

    // Функция для открытия окна Buy a library card
    // Функция для открытия окна "buy-window"
    function openBuyWindow() {
        const buyWindow = document.getElementById('buy-window');
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        buyWindow.style.visibility = 'visible';
        buyWindow.style.opacity = '1';
        loginWindow.style.visibility = 'hidden'
    }

    function closeBuyWindow() {
        const buyWindow = document.getElementById('buy-window');
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
        buyWindow.style.visibility = 'hidden';
        buyWindow.style.opacity = '0';
    }

    // Добавляем обработчики событий для кнопок "Buy"
    purchaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            openBuyWindow();
        });
    });

    const closeBuyWindowBtn = document.querySelector('.close-buy-window-btn')

    closeBuyWindowBtn.addEventListener('click', () => {
        closeBuyWindow();
    });

    document.addEventListener('mousedown', (event) => {
        const target = event.target;
        const buyWindow = document.getElementById('buy-window');
        
        if (!buyWindow.contains(target)) {
            // Закрытие окна buyWindow
            closeBuyWindow();
        }
    });

    // Функция для обновления счетчика книг в profileContainer
    function updateBookCount() {
        // Извлекаем элемент <span> с классом "cardsProfileCount cards-profile-count-books"
        const bookCountSpan = document.querySelector('.cardsProfileCount.cards-profile-count-books');

        // Получаем текущее значение счетчика (преобразовываем текст в число)
        let currentBookCount = parseInt(bookCountSpan.textContent, 10);

        // Увеличиваем значение счетчика на 1
        currentBookCount++;

        // Обновляем текст в элементе с новым значением счетчика
        bookCountSpan.textContent = currentBookCount.toString();
    }

    // Функция для обновления счетчика книг в library cards
    function updateLibraryBooksCount() {
        // Извлекаем элемент <span> с классом "cardsProfileCountLibrary cards-profile-count-library-visits"
        const libraryBooksCountSpan = document.querySelector('.cardsProfileCountLibrary.cards-profile-count-library-books');

        // Получаем текущее значение счетчика (преобразовываем текст в число)
        let currentLibraryBooksCount = parseInt(libraryBooksCountSpan.textContent, 10);

        // Увеличиваем значение счетчика на 1
        currentLibraryBooksCount++;

        // Обновляем текст в элементе с новым значением счетчика
        libraryBooksCountSpan.textContent = currentLibraryBooksCount.toString();
    }


    //покупка абонемента
    const buyButton = document.getElementById("book-buy-button");
    const buyWindow = document.getElementById("buy-window");
    const validDateInputs = document.querySelectorAll(".valid-date");
    const cardCvcInput = document.querySelector(".card-cvc");
    const cardholderNameInput = document.querySelector(".cardholder-name");
    const postalCodeInput = document.querySelector(".postal-code");
    const cityTownInput = document.querySelector(".city-town");

    // Слушаем событие ввода текста
    cardNumberInput.addEventListener("input", formatCardNumber);

    // Функция для форматирования номера карты
    function formatCardNumber() {
        let cardNumber = cardNumberInput.value.replace(/\D/g, "");
        let formattedCardNumber = "";

        for (let i = 0; i < cardNumber.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedCardNumber += " ";
            }
            formattedCardNumber += cardNumber[i];
        }

        cardNumberInput.value = formattedCardNumber;
    }

    buyButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Проверяем, заполнены ли все поля
        if (
            cardNumberInput.value.trim() !== "" &&
            Array.from(validDateInputs).every(input => input.value.trim() !== "") &&
            cardCvcInput.value.trim() !== "" &&
            cardholderNameInput.value.trim() !== "" &&
            postalCodeInput.value.trim() !== "" &&
            cityTownInput.value.trim() !== ""
        ) {
            // Если все поля заполнены, скрываем окно
            buyWindow.style.visibility = "hidden";
            const purchaseButtons = document.querySelectorAll('.buttonBuy');

            purchaseButtons.forEach(button => {
                button.addEventListener('click', () => {
                    buyWindow.style.visibility = 'hidden'
                    overlay.style.visibility = 'hidden'
                    // Создаем новую кнопку "Own"
                    const ownButton = document.createElement("button");
                    ownButton.classList.add("buttonOwn");
                    ownButton.innerHTML = '<span>Own</span>';
                    ownButton.disabled = true; // Делаем кнопку неактивной

                    // Заменяем текущую кнопку на новую "Own"
                    button.parentNode.replaceChild(ownButton, button);
                    ownButton.style.visibility = 'visible'

                    updateBookCount();
                    updateLibraryBooksCount();
                });

            });
        }
    });

    closeBuyWindowBtn.addEventListener("click", function () {
        // Закрытие окна при нажатии на крестик
        buyWindow.style.visibility = "hidden";
    });

    const digitalLibraryCardBoxText = document.querySelector('.digital-library-card-box-text');
    digitalLibraryCardBoxText.textContent = 'Your Library card';

    const digitalLibraryCardButton = document.querySelector('.digital-library-card-button');
    digitalLibraryCardButton.style.visibility = 'hidden';

    const infoBoxLibrary = document.querySelector('.infoBoxLibrary')
    infoBoxLibrary.style.visibility = 'visible';

    // замена текста в reader card text
    const readerCardText = document.querySelector('.reader-card-text');
    readerCardText.textContent = 'Visit your profile';

    // замена текста в reader card info
    const readerCardInfo = document.querySelector('.reader-card-info');
    readerCardInfo.textContent = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';

    // скрываем кнопки
    const buttonSign = document.querySelector('.button-box-sign');
    const buttonLogIn = document.querySelector('.button-box-log-in');
    buttonSign.style.visibility = 'hidden';
    buttonLogIn.style.visibility = 'hidden';

    // создаем кнопку "Profile" в  блоке library
    const buttonProfileLibrary = document.createElement("button");
    buttonProfileLibrary.classList.add("buttonProfileLibrary");
    buttonProfileLibrary.innerHTML = '<span>Profile</span>';
    
    const container = document.querySelector('.digital-library-box-reader');
    container.appendChild(buttonProfileLibrary);
    buttonProfileLibrary.style.visibility = 'visible';

    buttonProfileLibrary.addEventListener('click', openProfileContainer);

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

        const digitalLibraryCardBoxText = document.querySelector('.digital-library-card-box-text');
        digitalLibraryCardBoxText.textContent = 'Find your Library card';

        const digitalLibraryCardButton = document.querySelector('.digital-library-card-button');
        digitalLibraryCardButton.style.visibility = 'visible';

        const infoBoxLibrary = document.querySelector('.infoBoxLibrary')
        infoBoxLibrary.style.visibility = 'hidden';

        const readerCardText = document.querySelector('.reader-card-text');
        readerCardText.textContent = 'Get a reader card';

        const readerCardInfo = document.querySelector('.reader-card-info');
        readerCardInfo.textContent = 'You will be able to see a reader card after logging into your account or you can register a new account.';

        const buttonSign = document.querySelector('.button-box-sign');
        const buttonLogIn = document.querySelector('.button-box-log-in');
        buttonSign.style.visibility = 'visible';
        buttonLogIn.style.visibility = 'visible';

        const buttonProfileLibrary = document.querySelector('.buttonProfileLibrary');
        buttonProfileLibrary.style.visibility = 'hidden';

        container.removeChild(buttonProfileLibrary);
        // обновляем страницу
        location.reload(true);
    });
});
// =====================================================================
// =====================================================================
// =====================================================================

// Функция для входа в личный профиль через авторизацию
function login() {
    const loginEmailInput = document.getElementById('loginEmail');
    const loginPasswordInput = document.getElementById('loginPassword');

    const enteredEmail = loginEmailInput.value.trim();
    const enteredPassword = loginPasswordInput.value.trim();

    // Получаем данные пользователя из localStorage по email
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const user = Object.values(users).find(u => u.email === enteredEmail);

    if (!user) {
        alert('User with this email was not found.');
        return;
    }

    if (enteredPassword === user.password) {
        // Вход выполнен успешно, скрываем окно входа
        function closeLoginWindow() {
            const loginWindow = document.getElementById('loginWindow');
            loginWindow.style.visibility = 'hidden';
            overlay.style.visibility = 'hidden';
        }

        closeLoginWindow(); // функция, которая скроет окно входа
    } else {
        alert('Incorrect password.');
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
            profileContainer
        ];

        // Проверка на клик вне окон
        const isClickOutside = !elementsToExclude.some(element => element.contains(target));

        if (isClickOutside) {
            // Закрываем меню профиля (menuAuthorization)
            menuAuthorization.style.visibility = 'hidden';
        }
    });

    // код после успешной авторизации
    // Получаем randomHexNumber из localStorage
    const randomHexNumber = localStorage.getItem('userHexNumber');

    // Обновляем значение элемента <input> с классом "cardNumberProfile"
    const cardNumberProfileInput = document.getElementById('cardNumberProfile');
    cardNumberProfileInput.value = randomHexNumber;

    // Проверяем, есть ли значение в localStorage
    if (randomHexNumber) {
        // Обновляем значение элемента <input> с классом "cardNumberProfile"
        const cardNumberProfileInput = document.getElementById('cardNumberProfile');
        cardNumberProfileInput.value = randomHexNumber;
    } else {
        // Обработка случая, когда значение отсутствует в localStorage
        // Можно выполнить какие-либо действия или вывести сообщение об ошибке
        console.error('userHexNumber not found in localStorage');
    }


    const copyButton = document.querySelector('.cardNumberCopy');

    // Добавляем обработчик события клика на кнопку
    copyButton.addEventListener('click', async () => {
        try {
            // Копируем значение из элемента <input> в буфер обмена
            await navigator.clipboard.writeText(cardNumberProfileInput.value);
            alert('Текст скопирован в буфер обмена.');
        } catch (err) {
            // Обработка ошибки, если копирование не удалось
            alert('Не удалось скопировать текст.');
        }
    });

    // функцию для изменения иконки пользователя
    function updateUserInitials(firstName, lastName) {
        const userInitialsSpan = document.querySelector('.user-initials');
        const profilAvatar = document.querySelector('.profilAvatar');
        const profilName = document.querySelector('.profilName');

        // Устанавливаем содержимое элементов на первые буквы FirstName и LastName
        profilAvatar.textContent = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
        profilName.innerHTML = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)}<br />${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`;
        userInitialsSpan.textContent = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    }

    // Внутри функции входа после успешного входа в систему
    if (enteredPassword === user.password) {
        
        updateUserInitials(user.firstName, user.lastName);
    }
    // ========================================================================
    // Находим кнопку "profilMenu" и элемент "profile-info-initials"
    // Находим элементы для отображения имени и фамилии
    // const profileInfoInitials = document.getElementById('profile-info-initials');
    // const firstName = localStorage.getItem('firstName');
    // const lastName = localStorage.getItem('lastName');

    // // Проверяем, есть ли имя и фамилия в localStorage
    // if (firstName && lastName) {
    //     // Формируем отображаемый текст (первые буквы заглавные)
    //     const fullName = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`;
    
    //     // Устанавливаем текст в элемент profileInfoInitials
    //     profileInfoInitials.textContent = fullName;
    // }

    // // Добавляем обработчик события mouseover на кнопку "profilMenu"
    // profilMenuButton.addEventListener('mouseover', () => {
    //     // Показываем элемент profileInfoInitials
    //     profileInfoInitials.style.display = 'block';
    // });

    // // Добавляем обработчик события mouseout на кнопку "profilMenu"
    // profilMenuButton.addEventListener('mouseout', () => {
    //     // Скрываем элемент profileInfoInitials
    //     profileInfoInitials.style.display = 'none';
    // });
    
    // Обновляем счетчик посещений профиля
    function updateVisitCount() {
        // Проверяем, есть ли у пользователя свойство visitCount
        if (!user.hasOwnProperty('visitCount')) {
            user.visitCount = 0;
        }

        // Увеличиваем счетчик посещений
        user.visitCount++;

        // Обновляем отображение счетчика в интерфейсе
        const visitCountSpan = document.querySelector('.cardsProfileCount.cards-profile-count-visits');
        visitCountSpan.textContent = user.visitCount.toString();

        // Обновляем данные пользователя в localStorage
        users[user.id] = user;
        localStorage.setItem('users', JSON.stringify(users));
    }

    updateVisitCount();

    // Обновляем счетчик посещений библиотеки
    function updateLibraryVisitCount() {
        // Проверяем, есть ли у пользователя свойство currentLibraryCount
        if (!user.hasOwnProperty('currentLibraryCount')) {
            user.currentLibraryCount = 0;
        }

        // Увеличиваем счетчик посещений библиотеки
        user.currentLibraryCount++;

        // Обновляем отображение счетчика в интерфейсе
        const libraryVisitCountSpan = document.querySelector('.cardsProfileCountLibrary.cards-profile-count-library-visits');
        libraryVisitCountSpan.textContent = user.currentLibraryCount.toString();

        // Обновляем данные пользователя в localStorage
        users[user.id] = user;
        localStorage.setItem('users', JSON.stringify(users));
    }

    updateLibraryVisitCount();

    // открытие окна профиля меню
    const profileButton = document.getElementById('profileButton');
    const profileContainer = document.getElementById('profileContainer');
    const profileCloseButton = document.querySelector('.profileCloseBtn');
    // const profilMenu = document.getElementById('profilMenu');

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
        const profileContainer = document.getElementById('profileContainer');
        
        if (!profileContainer.contains(target)) {
            // Закрытие окна profileContainer
            closeProfileContainer();
        }
    });

    // Функция для открытия окна Buy a library card
    // Функция для открытия окна "buy-window"
    function openBuyWindow() {
        const buyWindow = document.getElementById('buy-window');
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        buyWindow.style.visibility = 'visible';
        buyWindow.style.opacity = '1';
        loginWindow.style.visibility = 'hidden'
    }

    function closeBuyWindow() {
        const buyWindow = document.getElementById('buy-window');
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
        buyWindow.style.visibility = 'hidden';
        buyWindow.style.opacity = '0';
    }

    // Добавляем обработчики событий для кнопок "Buy"
    const purchaseButtons = document.querySelectorAll('.buttonBuy');

    purchaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            openBuyWindow();
        });
    });

    const closeBuyWindowBtn = document.querySelector('.close-buy-window-btn')

    closeBuyWindowBtn.addEventListener('click', () => {
        closeBuyWindow();
    });

    document.addEventListener('mousedown', (event) => {
        const target = event.target;
        const buyWindow = document.getElementById('buy-window');
        
        if (!buyWindow.contains(target)) {
            // Закрытие окна buyWindow
            closeBuyWindow();
        }
    });
    
    // Функция для обновления счетчика книг в profileContainer
    function updateBookCount() {
        // Извлекаем элемент <span> с классом "cardsProfileCount cards-profile-count-books"
        const bookCountSpan = document.querySelector('.cardsProfileCount.cards-profile-count-books');

        // Получаем текущее значение счетчика (преобразовываем текст в число)
        let currentBookCount = parseInt(bookCountSpan.textContent, 10);

        // Увеличиваем значение счетчика на 1
        currentBookCount++;

        // Обновляем текст в элементе с новым значением счетчика
        bookCountSpan.textContent = currentBookCount.toString();
    }

    // Функция для обновления счетчика книг в library cards
    function updateLibraryBooksCount() {
        // Извлекаем элемент <span> с классом "cardsProfileCountLibrary cards-profile-count-library-visits"
        const libraryBooksCountSpan = document.querySelector('.cardsProfileCountLibrary.cards-profile-count-library-books');

        // Получаем текущее значение счетчика (преобразовываем текст в число)
        let currentLibraryBooksCount = parseInt(libraryBooksCountSpan.textContent, 10);

        // Увеличиваем значение счетчика на 1
        currentLibraryBooksCount++;

        // Обновляем текст в элементе с новым значением счетчика
        libraryBooksCountSpan.textContent = currentLibraryBooksCount.toString();
    }

    //покупка абонемента
    const buyButton = document.getElementById("book-buy-button");
    const buyWindow = document.getElementById("buy-window");
    const validDateInputs = document.querySelectorAll(".valid-date");
    const cardCvcInput = document.querySelector(".card-cvc");
    const cardholderNameInput = document.querySelector(".cardholder-name");
    const postalCodeInput = document.querySelector(".postal-code");
    const cityTownInput = document.querySelector(".city-town");

    // Слушаем событие ввода текста
    cardNumberInput.addEventListener("input", formatCardNumber);

    // Функция для форматирования номера карты
    function formatCardNumber() {
        let cardNumber = cardNumberInput.value.replace(/\D/g, "");
        let formattedCardNumber = "";

        for (let i = 0; i < cardNumber.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedCardNumber += " ";
            }
            formattedCardNumber += cardNumber[i];
        }

        cardNumberInput.value = formattedCardNumber;
    }

    buyButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Проверяем, заполнены ли все поля
        if (
            cardNumberInput.value.trim() !== "" &&
            Array.from(validDateInputs).every(input => input.value.trim() !== "") &&
            cardCvcInput.value.trim() !== "" &&
            cardholderNameInput.value.trim() !== "" &&
            postalCodeInput.value.trim() !== "" &&
            cityTownInput.value.trim() !== ""
        ) {
            // Если все поля заполнены, скрываем окно
            buyWindow.style.visibility = "hidden";
            const purchaseButtons = document.querySelectorAll('.buttonBuy');

            purchaseButtons.forEach(button => {
                button.addEventListener('click', () => {
                    buyWindow.style.visibility = 'hidden'
                    overlay.style.visibility = 'hidden'
                    // Создаем новую кнопку "Own"
                    const ownButton = document.createElement("button");
                    ownButton.classList.add("buttonOwn");
                    ownButton.innerHTML = '<span>Own</span>';
                    ownButton.disabled = true; // Делаем кнопку неактивной

                    // Заменяем текущую кнопку на новую "Own"
                    button.parentNode.replaceChild(ownButton, button);
                    ownButton.style.visibility = 'visible'
                    //функцию для обновления счетчика книг
                    updateBookCount();
                    updateLibraryBooksCount();
                });

            });
        }
    });

    closeBuyWindowBtn.addEventListener("click", function () {
        // Закрытие окна при нажатии на крестик
        buyWindow.style.visibility = "hidden";
    });

    // после успешной авторизации
    if (enteredPassword === user.password) {
        const digitalLibraryCardBoxText = document.querySelector('.digital-library-card-box-text');
        digitalLibraryCardBoxText.textContent = 'Your Library card';

        const digitalLibraryCardButton = document.querySelector('.digital-library-card-button');
        digitalLibraryCardButton.style.visibility = 'hidden';

        const infoBoxLibrary = document.querySelector('.infoBoxLibrary')
        infoBoxLibrary.style.visibility = 'visible';

        // замена текста в reader card text
        const readerCardText = document.querySelector('.reader-card-text');
        readerCardText.textContent = 'Visit your profile';

        // замена текста в reader card info
        const readerCardInfo = document.querySelector('.reader-card-info');
        readerCardInfo.textContent = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';

        // скрытие кнопок
        const buttonSign = document.querySelector('.button-box-sign');
        const buttonLogIn = document.querySelector('.button-box-log-in');
        buttonSign.style.visibility = 'hidden';
        buttonLogIn.style.visibility = 'hidden';

        // создаем кнопку "Profile" в  блоке library
        const buttonProfileLibrary = document.createElement("button");
        buttonProfileLibrary.classList.add("buttonProfileLibrary");
        buttonProfileLibrary.innerHTML = '<span>Profile</span>';
    
        const container = document.querySelector('.digital-library-box-reader');
        container.appendChild(buttonProfileLibrary);
        buttonProfileLibrary.style.visibility = 'visible';

        buttonProfileLibrary.addEventListener('click', openProfileContainer);
    }

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
        
        const digitalLibraryCardBoxText = document.querySelector('.digital-library-card-box-text');
        digitalLibraryCardBoxText.textContent = 'Find your Library card';

        const digitalLibraryCardButton = document.querySelector('.digital-library-card-button');
        digitalLibraryCardButton.style.visibility = 'visible';

        const infoBoxLibrary = document.querySelector('.infoBoxLibrary')
        infoBoxLibrary.style.visibility = 'hidden';

        const readerCardText = document.querySelector('.reader-card-text');
        readerCardText.textContent = 'Get a reader card';

        const readerCardInfo = document.querySelector('.reader-card-info');
        readerCardInfo.textContent = 'You will be able to see a reader card after logging into your account or you can register a new account.';

        const buttonSign = document.querySelector('.button-box-sign');
        const buttonLogIn = document.querySelector('.button-box-log-in');
        buttonSign.style.visibility = 'visible';
        buttonLogIn.style.visibility = 'visible';

        const buttonProfileLibrary = document.querySelector('.buttonProfileLibrary');
        buttonProfileLibrary.style.visibility = 'hidden';

        location.reload(true);
    });
};

document.getElementById('loginSubmit').addEventListener('click', (event) => {
    event.preventDefault();
    login();
});

const readersNameInput = document.getElementById('readersName');
const CardNumberLibrary = document.getElementById('CardNumberLibrary');
const digitalLibraryCardButton = document.querySelector('.digital-library-card-button');
const infoBoxLibrary = document.querySelector('.infoBoxLibrary');
const cardNumberProfileInput = document.getElementById('cardNumberProfile');

// Функция для проверки, все ли поля заполнены
function areFieldsFilled() {
    const enteredCardNumberLibrary = cardNumberProfileInput.value.trim();
    const enteredreadersNameInput = readersNameInput.value.trim();

    return enteredCardNumberLibrary !== '' && enteredreadersNameInput !== '';
}

digitalLibraryCardButton.addEventListener('click', () => {
    if (areFieldsFilled()) {
        // Получаем данные из localStorage
        const storedRandomHexNumber = localStorage.getItem('userHexNumber');
        const storedFirstName = localStorage.getItem('firstName');
        // const storedLastName = localStorage.getItem('lastName');

        // Получаем данные, введенные пользователем
        const enteredCardNumberLibrary = storedRandomHexNumber; // Предполагаю, что cardNumberProfileInput - это элемент, содержащий номер карты
        const enteredreadersNameInput = storedFirstName;

        // Проверяем совпадение данных
        if (
            storedRandomHexNumber === enteredCardNumberLibrary &&
            storedFirstName === enteredreadersNameInput
            // storedLastName === enteredLastName
        ) {
            // Скрываем кнопку и показываем infoBoxLibrary на 10 секунд
            digitalLibraryCardButton.style.visibility = 'hidden';
            infoBoxLibrary.style.visibility = 'visible';

            // Через 10 секунд восстанавливаем состояние
            setTimeout(() => {
                digitalLibraryCardButton.style.visibility = 'visible';
                infoBoxLibrary.style.visibility = 'hidden';
            }, 10000);
        } else {
            // Если данные не совпадают, можно вывести сообщение об ошибке
            alert('Invalid card number or name.');
        }
    } else {
        // Если не все поля заполнены, выведите сообщение об ошибке
        alert('Please fill in all fields.');
    }    
});
