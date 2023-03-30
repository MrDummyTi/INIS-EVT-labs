__nameOfTShirts = "Майка " + localStorage.getItem('__nameOfTShirts');
__numberOfTShirts = localStorage.getItem('__numberOfTShirts');

console.log(shirts[1].colors[1].front)

document.title = __nameOfTShirts;

let ColorTshirtsPer = 0;
let fontOrBackPer = 0;

function pictureImage(numberOfTShirts, fontOrBack = 0, ColorTshirts = 0) {

    console.log("img/" + shirts[numberOfTShirts].colors[ColorTshirts].front)
    const image = document.getElementById('image');
    if (fontOrBack == 0) {
        image.src = "img/" + shirts[numberOfTShirts].colors[ColorTshirts].front
    }

    else {
        image.src = "img/" + shirts[numberOfTShirts].colors[ColorTshirts].back
    }
}

colorsTShirts = Object.keys(shirts[__numberOfTShirts].colors)

console.log(colorsTShirts)



const container1 = document.querySelector('.container1');

const aboutTShirt = `
<div class="aboutTShirt">
    <div class="aboutTShirt__overview">
        <div class="aboutTShirt__overview_title">${localStorage.getItem('__nameOfTShirts')}</div>
        <div class="aboutTShirt__overview_image">
            <img id="image" src="img/shirt_images/beepboop-blue-back.png" alt="">
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

const aboutTShirt__choice__colors = document.querySelector('.aboutTShirt__choice__colors');

for (let i = 0; colorsTShirts.length > i; i++) {
    const aboutTShirt__choice__color = `
    <button id="button${colorsTShirts[i]}" class="aboutTShirt__choice__colors${colorsTShirts[i]} buttonColors">${colorsTShirts[i]}</button>
`;
    console.log(aboutTShirt__choice__color)

    aboutTShirt__choice__colors.insertAdjacentHTML('beforeend', aboutTShirt__choice__color);
}

// {/* <button class="aboutTShirt__choice__colorsWhite buttonColors">White</button>
// <button class="aboutTShirt__choice__colorsBlue buttonColors">Blue</button>
// <button class="aboutTShirt__choice__colorsGreen buttonColors">Green</button>
// <button class="aboutTShirt__choice__colorsYellow buttonColors">Yellow</button>
// <button class="aboutTShirt__choice__colorsRed buttonColors">Red</button> */}

for (let i = 0; 2 > i; i++) {
    let button = document.getElementById(`buttonside${i}`);

    button.addEventListener("click", function () {
        console.log(__numberOfTShirts, i, ColorTshirtsPer)
        pictureImage(__numberOfTShirts, i, ColorTshirtsPer)
        ColorTshirtsPer = i;
    });
}


// for (let i = 0; colorsTShirts.length > i; i++) {
//     let button = document.getElementById(`button${colorsTShirts[i]}`);
//     let hiddenBlock = document.getElementById(`quick__view${i}`);

//     button.addEventListener("click", function () {
//         // второй for для уничтожения уже открытых
//         for (let y = 0; countOfTShirts > y; y++) {
//             let hiddenBlocks = document.getElementById(`quick__view${y}`);
//             hiddenBlocks.style.display = "none";
//         }

//         hiddenBlock.style.display = "grid";
//     });
// }