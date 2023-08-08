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