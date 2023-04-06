// Получаем все элементы с классом "target"
const targets = document.querySelectorAll('.target');

let selectedTarget = null;

let mouseX = 0;
let mouseY = 0;

let mouseLastX = 0;
let mouseLastY = 0;

// Добавляем событие mousedown на каждый элемент с классом "target"
targets.forEach(target => {
  target.addEventListener('mousedown', e => {
    // указываем что именно выбранный нажатый элемент - selectTarget
    selectedTarget = e.target;
    // Mouse X  и mouse Y - текущее X и Y данного элемента
    // clientX и clientY являються свойствами мыши в браузере а именно от левого верхнего
    mouseX = e.clientX;
    mouseY = e.clientY;

    selectedTarget.style.zIndex = '1000';
    selectedTarget.style.background = 'green';

    
    mouseLastX = selectedTarget.style.left;
    mouseLastY = selectedTarget.style.top;
  });
});

// Добавляем событие mousemove на весь документ
document.addEventListener('mousemove', e => {
  // это свойство бы работало всегда но тут проверяться selectedTarget != null
  if (selectedTarget) {
    // каждый раз когда мышка с выбранной целью "selectedTarget" двигается на 1 пиксель
    // вычисляеться перемещение deltaX и deltaY посредством вычитания от текущего положнения 
    // предидущее положение mouseX mouseY
    const deltaX = e.clientX - mouseX;
    const deltaY = e.clientY - mouseY;
    // само перемещение посредством изменения css стиля 
    selectedTarget.style.left = `${selectedTarget.offsetLeft + deltaX}px`;
    selectedTarget.style.top = `${selectedTarget.offsetTop + deltaY}px`;

    // offsetLeft и offsetTop
    
    // задаеться mouseX предыдущее положение
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
});

// Добавляем событие mouseup на весь документ
document.addEventListener('mouseup', e => {
  // если selectedTarget!= null т.е был отжат именно элемент а не пустая часть экрана то:
  if (selectedTarget) {
    // сбрасываем zIndex
    selectedTarget.style.zIndex = 'auto';
    // возращаем цвет
    selectedTarget.style.background = 'red';
    selectedTarget = null;
  }
});

// Добавляем событие dblclick на каждый элемент с классом "target"
targets.forEach(target => {
  target.addEventListener('dblclick', e => {

    selectedTarget = e.target;
    selectedTarget.style.background = 'yellow';
  });
});

// Добавляем событие click на весь документ
document.addEventListener('click', e => {
  if (selectedTarget && e.target !== selectedTarget) {
    selectedTarget.style.background = 'red';
    selectedTarget = null;
  }
});

// Добавляем обработчик события keydown на весь документ
document.addEventListener('keydown', e => {
  // при нажатии escape и выбранной цели
  if (e.key === 'Escape' && selectedTarget) {
    // при esc возвращаем на предидущее перед нажатие место
    selectedTarget.style.left = mouseLastX;
    selectedTarget.style.top = mouseLastY;

    selectedTarget.style.background = 'red';
    selectedTarget = null;
  }
});