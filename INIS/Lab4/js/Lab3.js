
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

    // console.log(frontImageFont);
    // console.log(frontImageFont.length);
    if (shirts[i].name === undefined) {
        shirts[i].name = "Безымянная"
    }

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
                    <a href="Details.html">See Page</a>
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


    // Lab4
    // План такой: при клике переходим на страницу а localStorage передает i - номер майки

    let buttonNewPage = document.getElementById(`seePage${i}`);
    // let hiddenBlock = document.getElementById(`quick__view${i}`);

    buttonNewPage.addEventListener("click", function () {
        localStorage.setItem('__numberOfTShirts', `${i}`);
        localStorage.setItem('__nameOfTShirts', `${shirts[i].name}`);
        localStorage.setItem('__priceOfTshirts',`${shirts[i].price}`);
        localStorage.setItem('__descriptionOfTshirts',`${shirts[i].description}`);
        localStorage.setItem('__descriptionOfTshirts',`${shirts[i].description}`);

        // colorsHave
    });

}

