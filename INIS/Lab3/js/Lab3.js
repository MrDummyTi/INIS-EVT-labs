const shirts = [{
    "name": "Beep Boop",
    "description": "Once upon a time, a mighty guide guarded the intersection of Forbes and Morewood, and would dutifully direct distracted college students when it was safe to cross the street. Its voice was soothing, strong, and steady. Its name was beep boop.",
    "price": "$19.99",
    "colors": {
        "white": {
            "front": "shirt_images/beepboop-white-front.png",
            "back": "shirt_images/beepboop-white-back.png"
        },
        "blue": {
            "front": "shirt_images/beepboop-blue-front.png",
            "back": "shirt_images/beepboop-blue-back.png"
        },
        "pink": {
            "front": "shirt_images/beepboop-pink-front.png",
            "back": "shirt_images/beepboop-pink-back.png"
        },
        "red": {
            "front": "shirt_images/beepboop-red-front.png",
            "back": "shirt_images/beepboop-red-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-m-front.png",
        "back": "shirt_images/default-m-back.png"
    }
},
{
    "name": "Car",
    "description": "As you move in to campus, one of the first memories so many students have is driving up to their dorm, unloading their bags, and moving in. How do they arrive to campus? By car, of course!",
    "price": "$10.99",
    "colors": {
        "white": {
            "front": "shirt_images/car-white-front.png",
            "back": "shirt_images/car-white-back.png"
        },
        "blue": {
            "front": "shirt_images/car-blue-front.png",
            "back": "shirt_images/car-blue-back.png"
        },
        "green": {
            "front": "shirt_images/car-green-front.png",
            "back": "shirt_images/car-green-back.png"
        },
        "yellow": {
            "front": "shirt_images/car-yellow-front.png",
            "back": "shirt_images/car-yellow-back.png"
        },
        "red": {
            "front": "shirt_images/car-red-front.png",
            "back": "shirt_images/car-red-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-w-front.png",
        "back": "shirt_images/default-w-back.png"
    }
},
{
    "name": "Forever Plaid",
    "price": "$13.99",
    "description": "Proudly wear your tartan plaid as a patch on your front shirt pocket. And on the back, ask the important question that all CMU students should know the answer to: got plaid?",
    "colors": {
        "white": {
            "front": "shirt_images/plaid-white-front.png",
            "back": "shirt_images/plaid-white-back.png"
        },
        "pink": {
            "front": "shirt_images/plaid-pink-front.png",
            "back": "shirt_images/plaid-pink-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-w-front.png",
        "back": "shirt_images/default-w-back.png"
    }
},
{
    "name": "BSUIR",
    "description": "BSUIR mission is to train engineers and scientists capable of generating and implementing innovative ideas, creating competitive high technology products in the spheres of computer science and electronics.",
    "price": "$6.99",
    "colors": {
        "white": {
            "front": "shirt_images/bsuir-white-front.png",
            "back": "shirt_images/bsuir-white-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-m-front.png",
        "back": "shirt_images/default-m-back.png"
    }
}];

const contentTShirts__items = document.querySelector('.contentTShirts__items');
const quick__views = document.querySelector('.quick__views');

countOfTShirts = 0;

for (let i = 0; i < shirts.length; i++) {
    let frontImageFont;
    let frontImageBack;
    let colorsHave;

    countOfTShirts++;

    // let countColors = Object.keys(shirts[i].colors).length
    // берет первый цвет из colors, если нет то берет default, если нет default-a берем пустую
    if (shirts[i].colors !== undefined && Object.keys(shirts[i].colors).length !== 0) {
        for (const color in shirts[i].colors) {
            frontImageFont = shirts[i].colors[color].front;
            frontImageBack = shirts[i].colors[color].back;
            break;
        }
    } else {
        if (shirts[i].default !== undefined && Object.keys(shirts[i].default).length !== 0) {
            frontImageFont = shirts[i].default.front;
        } else {
            frontImageFont = "shirt_images/not-found.png"
        }
    }


    // имя

    if (shirts[i].name === undefined) {
        shirts[i].name = "Безымянная"
    }

    // количесво

    if (shirts[i].colors) {
        colorsHave = Object.keys(shirts[i].colors).length
        if (colorsHave === 1) {
            colorsHave = "Available in 1 color"
        } else {
            colorsHave = `Available in ${colorsHave} colors `
        }
    }
    else {
        colorsHave = "Not available in color"
    }
    console.log(colorsHave)


    const contentTShirts__item = `
        <div class="contentTShirts__item">
            <div class="contentTShirts__item_image">
            <img src="img/${frontImageFont}" alt="">
            </div>
            <div class="contentTShirts__item_name">${shirts[i].name}</div>
            <div class="contentTShirts__item_colors">${colorsHave}</div>
            <div class="contentTShirts__item_nav">
            <div class="nav__row">
                <button id="buttonQuick${i}" class="nav__column buttonBlue">
                Quick View
                </button>
                <button id="seePage${i}" class="nav__column buttonBlue">
                    See Page
                </button>
            </div>
            </div>
        </div>
        `;


    contentTShirts__items.insertAdjacentHTML('beforeend', contentTShirts__item);

    const quick__view = `
    <div class="quick__view" id="quick__view${i}">
        <div class="quick__view_images">
            <img src="img/${frontImageFont}" alt="">
            <img src="img/${frontImageBack}" alt="">
        </div>
        <div class="quick__view_text">
            <div class="quick__view_title">
                ${shirts[i].name}
            </div>
            <div class="quick__view_price">${shirts[i].price}</div>
            <button id="buttonQuickClose${i}" class="quick__view_button buttonBlue">Close</button>
        </div>
    </div>
    `;

    quick__views.insertAdjacentHTML('beforeend', quick__view);
}


// let i = 1;
// let style = document.createElement('style');
// style.innerHTML = `#class${i} { display: none; }`;
// document.head.appendChild(style);

// let buttons = [];
// const button = document.getElementById("buttonQuick0");
// const hiddenBlock = document.getElementById("quick__view0");

// button.addEventListener("click", function() {
//     if (hiddenBlock.style.display === "none") {
//       hiddenBlock.style.display = "grid";
//     } else {
//       hiddenBlock.style.display = "none";
//     }
//   });

// for (let i = 0;countOfTShirts>i; i++) {
//     buttons[i] = `buttonQuick${i}`;
//     // console.log("rr");
// }


// Кнопка просмотра

for (let i = 0; countOfTShirts > i; i++) {
    let button = document.getElementById(`buttonQuick${i}`);
    let hiddenBlock = document.getElementById(`quick__view${i}`);

    button.addEventListener("click", function () {
        // второй for для уничтожения уже открытых
        for (let y = 0; countOfTShirts > y; y++) {
            let hiddenBlocks = document.getElementById(`quick__view${y}`);
            hiddenBlocks.style.display = "none";
        }

        hiddenBlock.style.display = "grid";
    });


    // кнопка закрыть просмотр
    let buttonClose = document.getElementById(`buttonQuickClose${i}`);

    buttonClose.addEventListener("click", function () {
        for (let y = 0; countOfTShirts > y; y++) {
            let hiddenBlocks = document.getElementById(`quick__view${y}`);
            hiddenBlocks.style.display = "none";
        }
    });

    for (let i = 0; countOfTShirts > i; i++) {
        let button = document.getElementById(`buttonQuick${i}`);
        let hiddenBlock = document.getElementById(`quick__view${i}`);

        button.addEventListener("click", function () {
            // второй for для уничтожения уже открытых
            for (let y = 0; countOfTShirts > y; y++) {
                let hiddenBlocks = document.getElementById(`quick__view${y}`);
                hiddenBlocks.style.display = "none";
            }

            hiddenBlock.style.display = "grid";
        });


        // кнопка закрыть просмотр
        let buttonClose = document.getElementById(`buttonQuickClose${i}`);

        buttonClose.addEventListener("click", function () {
            for (let y = 0; countOfTShirts > y; y++) {
                let hiddenBlocks = document.getElementById(`quick__view${y}`);
                hiddenBlocks.style.display = "none";
            }
        });
    }

}

