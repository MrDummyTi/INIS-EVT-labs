// Берем имя и номер выбранной майки из lab3
__nameOfTShirts = "Майка " + localStorage.getItem('__nameOfTShirts');
__numberOfTShirts = localStorage.getItem('__numberOfTShirts');
// Задаем имя Html относительно названия майки
document.title = __nameOfTShirts;

// массив с цветами на этой которые имеютьсядля данной майки в shirts.js
let arrColorsTShirts = Object.keys(shirts[__numberOfTShirts].colors)
// переменные выбранного цвета/ стороны
let ColorTshirtsPer = arrColorsTShirts[0];
let fontOrBackPer = 0;


// Главная функция по выбору картинки
function pictureImage(numberOfTShirts, fontOrBack=0, colorTshirts) {
    // берем id единственной меняющейся картинки 
    const image = document.getElementById('image');
    // решаем font или back где font = 0 back = все остальное
    if (fontOrBack === 0) {
        image.src = "img/" + shirts[numberOfTShirts].colors[colorTshirts].front
    }
    else {
        image.src = "img/" + shirts[numberOfTShirts].colors[colorTshirts].back
    }
}


const container1 = document.querySelector('.container1');
const aboutTShirt = `
<div class="aboutTShirt">
    <div class="aboutTShirt__overview">
        <div class="aboutTShirt__overview_title">${localStorage.getItem('__nameOfTShirts')}</div>
        <div class="aboutTShirt__overview_image">
            <img id="image" src="" alt="">
        </div>
    </div>
    <div class="aboutTShirt__choice">
        <div class="aboutTShirt__choice_price">${localStorage.getItem('__priceOfTshirts')}</div>
        <div class="aboutTShirt__choice_description">${localStorage.getItem('__descriptionOfTshirts')}</div>
        <div class="aboutTShirt__choice__side">
            <div class="aboutTShirt__choice__side_description">Side:</div>
            <div class="aboutTShirt__choice__side__buttons">
                <button id="buttonside0" class="aboutTShirt__choice__side__buttons_front buttonColors">Front</button>
                <button id="buttonside1" class="aboutTShirt__choice__side__buttons_back buttonColors">Back</button>
            </div>
        </div>
        <div class="aboutTShirt__choice__colors">
            <div class="aboutTShirt__choice__colors_description">Color:</div>

        </div>
    </div>
</div>
`;
container1.insertAdjacentHTML('beforeend', aboutTShirt);
// изображение по умолчанию
let startImage = pictureImage(__numberOfTShirts,0,ColorTshirtsPer)


// создание динамических цветных html кнопок
const aboutTShirt__choice__colors = document.querySelector('.aboutTShirt__choice__colors');
for (let i = 0; arrColorsTShirts.length > i; i++) {
    const aboutTShirt__choice__color = `
        <button id="button${arrColorsTShirts[i]}" class="aboutTShirt__choice__colors${arrColorsTShirts[i]} buttonColors">${arrColorsTShirts[i]}</button>
    `;
    aboutTShirt__choice__colors.insertAdjacentHTML('beforeend', aboutTShirt__choice__color);
}


// событие для тыканья стороны майки
for (let i = 0; 2 > i; i++) {
    let button = document.getElementById(`buttonside${i}`);
    button.addEventListener("click", function () {
        fontOrBackPer = i;
        pictureImage(__numberOfTShirts, fontOrBackPer, ColorTshirtsPer);
        // Border для нажатой кнопки
        for (let i = 0; i < 2; i++) {
            let buttons = document.getElementById(`buttonside${i}`);
            buttons.style.border = "none";
            buttons.style.backgroundColor = "rgb(24, 24, 82)";
        }
        button.style.border = "2px solid grey";
        button.style.backgroundColor = "blue";

    });
}

// событие для тыканья цвета майки
for (let i = 0; i < arrColorsTShirts.length; i++) {
    let color = arrColorsTShirts[i];
    let button = document.getElementById(`button${color}`);
    button.addEventListener("click", function () {
        ColorTshirtsPer = color;
        pictureImage(__numberOfTShirts, fontOrBackPer, ColorTshirtsPer);
        // Border для нажатой кнопки
        for (let i = 0; i < arrColorsTShirts.length; i++) {
            let buttons = document.getElementById(`button${arrColorsTShirts[i]}`);
            buttons.style.border = "none"
        }
        button.style.border = "2px solid black";
    });
}



