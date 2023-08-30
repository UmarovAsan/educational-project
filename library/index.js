document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const header = document.querySelector("header");
    const headerMenu = document.getElementById('headerMenu');
    const menuRegistration = document.getElementById('menuRegistration');
    const menuAuthorization = document.getElementById('menuAuthorization');

    // Функция открытия бургер-меню
    burger.addEventListener("click", function () {
        header.classList.toggle("open");
        menuAuthorization.style.visibility = 'hidden';
        menuRegistration.style.visibility = 'hidden';
        closeWindowWithVisibility(registerWindow);
        closeWindowWithVisibility(loginWindow);
    });

    // Закрыть меню при нажатии на Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            header.classList.remove("open");
            menuAuthorization.style.visibility = 'hidden';
            menuRegistration.style.visibility = 'hidden';
            closeWindowWithVisibility(registerWindow);
            closeWindowWithVisibility(loginWindow);
        }
    });

    // Добавляем обработчик события клика на кнопку "headerMenu"
    headerMenu.addEventListener('click', () => {
        // Toggle the visibility of the menuRegistration
        if (menuRegistration.style.visibility === 'hidden') {
            menuRegistration.style.visibility = 'visible';
        } else {
            menuRegistration.style.visibility = 'hidden';
        }
        header.classList.remove("open");
    });

    // Rest of your code...
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

// //открытие окна авторизации и регистрации
const overlay = document.getElementById('overlay');
const registerButton = document.getElementById('registerButton');
const registerWindow = document.getElementById('registerWindow');
const registerCloseButton = document.getElementById('registerCloseButton');
const registrationBtn = document.getElementById('registrationBtn');
const loginButton = document.getElementById('loginButton');
const loginWindow = document.getElementById('loginWindow');
const loginCloseButton = document.getElementById('loginCloseButton');
const authorizationBtn = document.getElementById('authorizationBtn');
const buttonBuy = document.querySelectorAll('.buttonBuy');

function openWindowWithVisibility(window) {
    window.style.visibility = 'visible';
    window.style.opacity = "1";
    overlay.style.visibility = 'visible';
    overlay.style.opacity = "1";
}

function closeWindowWithVisibility(window) {
    window.style.visibility = 'hidden';
    window.style.opacity = "0";
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = "0";
}

registerButton.addEventListener('click', () => {
    openWindowWithVisibility(registerWindow);
    overlay.style.visibility = 'visible'; // Показываем overlay с помощью visibility
});

registerButton.addEventListener('click', () => {
    closeWindowWithVisibility(loginWindow);
});

registrationBtn.addEventListener('click', () => {
    openWindowWithVisibility(registerWindow);
});

registrationBtn.addEventListener('click', () => {
    closeWindowWithVisibility(loginWindow);
});

registerCloseButton.addEventListener('click', () => {
    closeWindowWithVisibility(registerWindow);
    overlay.style.visibility = 'hidden';
});

registrationBtnCard.addEventListener('click', () => {
    openWindowWithVisibility(registerWindow);
    overlay.style.visibility = 'visible';
});

registrationBtnCard.addEventListener('click', () => {
    closeWindowWithVisibility(loginWindow);
});

loginButton.addEventListener('click', () => {
    openWindowWithVisibility(loginWindow);
    overlay.style.visibility = 'visible';
});

loginButton.addEventListener('click', () => {
    closeWindowWithVisibility(registerWindow);
});

authorizationBtn.addEventListener('click', () => {
    openWindowWithVisibility(loginWindow);
});

authorizationBtn.addEventListener('click', () => {
    closeWindowWithVisibility(registerWindow);
});

loginCloseButton.addEventListener('click', () => {
    closeWindowWithVisibility(loginWindow);
    overlay.style.visibility = 'hidden';
});

authorizationBtnCard.addEventListener('click', () => {
    openWindowWithVisibility(loginWindow);
    overlay.style.visibility = 'visible';
});

authorizationBtnCard.addEventListener('click', () => {
    closeWindowWithVisibility(registerWindow);
});

buttonBuy.forEach(button => {
    button.addEventListener('click', () => {
        openWindowWithVisibility(loginWindow);
        overlay.style.visibility = 'visible';
    });
});


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
        alert("Заполните все поля. firstName");
        return;
    }

    if (lastName === "") {
        alert("Заполните все поля. lastName");
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
    handleRegistrationSuccess(user);
});
  
  
function User(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
}

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


// После успешной регистрации пользователя, вызываем функцию для изменения кнопки
function handleRegistrationSuccess(user) {
    try {
        // Hide the menuRegistration
        const menuRegistrationElement = document.getElementById('menuRegistration');
        if (menuRegistrationElement) {
            menuRegistrationElement.style.visibility = 'hidden';
        }

        // Get a reference to the headerMenu button
        const headerMenuButton = document.getElementById('headerMenu');

        // Create a new button element with the class "profilMenu"
        const profilMenuButton = document.createElement('button');
        profilMenuButton.className = 'profilMenu';

        // Create a span element with the class "user-initials" and set its text content
        const userInitialsSpan = document.createElement('span');
        userInitialsSpan.className = 'user-initials';
        userInitialsSpan.textContent = `${user.firstName.charAt(0).toUpperCase()}${user.lastName.charAt(0).toUpperCase()}`;

        // Append the span element to the profilMenu button
        profilMenuButton.appendChild(userInitialsSpan);

        // Replace the headerMenu button with the new profilMenu button
        headerMenuButton.parentNode.replaceChild(profilMenuButton, headerMenuButton);

        // Get a reference to the registerWindow element and hide it
        const registerWindowElement = document.getElementById('registerWindow');
        if (registerWindowElement) {
            registerWindowElement.style.visibility = 'hidden';
        }

        // Get a reference to the overlay element and hide it
        const overlayElement = document.getElementById('overlay');
        if (overlayElement) {
            overlayElement.style.visibility = 'hidden';
        }

        // Get a reference to the menuAuthorization element
        const menuAuthorizationElement = document.getElementById('menuAuthorization');

        // Add a click event listener to the user-initials span element
        userInitialsSpan.addEventListener('click', () => {
            // Toggle the visibility of the menuAuthorization
            if (menuAuthorizationElement.style.visibility === 'hidden') {
                menuAuthorizationElement.style.visibility = 'visible';
            } else {
                menuAuthorizationElement.style.visibility = 'hidden';
            }
        });
    } catch (error) {
        console.error('Error handling registration success:', error);
    }
}

// Get references to the user-initials span element and profilMenu button
const userInitialsSpan = document.querySelector('.user-initials');
const profilMenuButton = document.getElementById('profilMenu');

// Get references to the user's First Name and Last Name input fields
const userFirstNameInput = document.getElementById('firstName');
const userLastNameInput = document.getElementById('lastName');

// Function to display full name when hovering over profilMenu
function displayFullName() {
    const userFirstName = userFirstNameInput.value;
    const userLastName = userLastNameInput.value;
    userInitialsSpan.textContent = `${userFirstName} ${userLastName}`;
}

// Function to display initials when not hovering over profilMenu
function displayInitials() {
    const userFirstName = userFirstNameInput.value;
    const userLastName = userLastNameInput.value;
    userInitialsSpan.textContent = `${userFirstName.charAt(0).toUpperCase()}${userLastName.charAt(0).toUpperCase()}`;
}

// Add mouseenter and mouseleave event listeners to profilMenu
profilMenuButton.addEventListener('mouseenter', displayFullName);
profilMenuButton.addEventListener('mouseleave', displayInitials);

// Initialize with initials
displayInitials();

const profileButton = document.getElementById('profileButton');
const profileContainer = document.getElementById('profileContainer');
const profileCloseButton = document.querySelector('.profileCloseBtn');
const menuAuthorization = document.getElementById('menuAuthorization');
const logOutButton = document.getElementById('logOutButton');
const headerMenuContainerTwo = document.querySelector('header__menu-containertwo'); // Added "document."
const headerMenuContainer = document.querySelector('header__menu-container'); // Added "document."
const profilMenu = document.getElementById('profilMenu');

function openProfileContainer() {
    profileContainer.style.visibility = 'visible';
    profileContainer.style.opacity = '1';
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    menuAuthorization.style.visibility = 'hidden';
}

function closeProfileContainer() {
    profileContainer.style.visibility = 'hidden';
    profileContainer.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
}

// function logOut() {
//     // closeProfileContainer(); // Close the profile container
//     // headerMenuContainerTwo.style.visibility = 'hidden';
//     profilMenu.style.visibility = 'hidden';
//     headerMenuContainerTwo.style.visibility = 'hidden';
//     headerMenuContainer.style.visibility = 'visible';
    // menuAuthorization.style.visibility = 'hidden';

    // Show the header__menu-container and hide the menuRegistration
    // headerMenuContainer.style.visibility = 'visible';
    // headerMenu.style.visibility = 'visible';
// }

// logOutButton.addEventListener('click', () => {
//     // Hide header__menu-containertwo
//     // headerMenuContainertwo.style.opacity = '0';
//     headerMenuContainerTwo.style.visibility = 'hidden';

//     // Show header__menu-container with a smooth transition
//     // headerMenuContainer.style.opacity = '1';
//     headerMenuContainer.style.visibility = 'visible';
// });

profileButton.addEventListener('click', openProfileContainer);
profileCloseButton.addEventListener('click', closeProfileContainer);
logOutButton.addEventListener('click', logOut);


// const profileButton = document.getElementById('profileButton');
// const profileContainer = document.getElementById('profileContainer');
// const profileCloseButton = document.querySelector('.profileCloseBtn');
// const menuAuthorization = document.getElementById('menuAuthorization');
// const logOutButton = document.getElementById('logOutButton');
// const headerMenuContainerTwo = document.querySelector('header__menu-containertwo'); // Added "document."
// const headerMenuContainer = document.querySelector('header__menu-container'); // Added "document."

// function openProfileContainer() {
//     profileContainer.style.visibility = 'visible';
//     profileContainer.style.opacity = '1';
//     overlay.style.visibility = 'visible';
//     overlay.style.opacity = '1';
//     menuAuthorization.style.visibility = 'hidden';
// }

// function closeProfileContainer() {
//     profileContainer.style.visibility = 'hidden';
//     profileContainer.style.opacity = '0';
//     overlay.style.visibility = 'hidden';
//     overlay.style.opacity = '0';
// }

// function logOut() {
//     closeProfileContainer(); // Close the profile container
//     profileButton.style.visibility = 'hidden'; // Corrected from "profilMenu" to "profileButton"
//     menuAuthorization.style.visibility = 'hidden';
//     headerMenuContainerTwo.style.visibility = 'hidden';
//     headerMenu.style.visibility = 'visible';
//     headerMenuContainer.style.visibility = 'visible';
// }

// profileButton.addEventListener('click', openProfileContainer);
// profileCloseButton.addEventListener('click', closeProfileContainer);
// logOutButton.addEventListener('click', logOut);

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