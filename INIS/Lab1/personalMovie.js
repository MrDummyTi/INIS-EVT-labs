let PersonalMovieDB  = {
    count: undefined,
    lastFilm: undefined,
    lastFilmMark: undefined,

    lastFilm2: undefined,
    lastFilmMark2: undefined
}

/////////////////////////////////////////////////////////////////////

function checkNumberOfFilms() {
    const questions = document.querySelector('.questions')
    const numberOfFilms = document.getElementById("numberOfFilms").value
    if(!numberOfFilms) {
        questions.insertAdjacentHTML('afterBegin', '<p>Введите число</p>');
        return
    }
    PersonalMovieDB.count = numberOfFilms

    // как вставить размекту:
    clearDocument()
    addQuestions()
}

function inputFilmAndMark() {
    const questions = document.querySelector('.questions')

    const nameOfFilm = document.getElementById("nameOfFilm").value
    const markOfFilm = document.getElementById("markOfFilm").value
    if(!nameOfFilm|| nameOfFilm.length > 50) {
        questions.insertAdjacentHTML('afterBegin', '<p>Введите корректное название</p>');
        return
    }

    if(!markOfFilm) {
        questions.insertAdjacentHTML('afterBegin', '<p>Введите оценку</p>');
        return
    }

    PersonalMovieDB.lastFilm = nameOfFilm
    PersonalMovieDB.lastFilmMark = markOfFilm

    // как вставить размекту:
    clearDocument()
    addQuestions2()
}

function inputFilmAndMark2() {
    const questions = document.querySelector('.questions')

    const nameOfFilm2 = document.getElementById("nameOfFilm2").value
    const markOfFilm2 = document.getElementById("markOfFilm2").value
    if(!nameOfFilm2|| nameOfFilm2.length > 50) {
        questions.insertAdjacentHTML('afterBegin', '<p>Введите корректное название</p>');
        return
    }

    if(!markOfFilm2) {
        questions.insertAdjacentHTML('afterBegin', '<p>Введите оценку</p>');
        return
    }

    PersonalMovieDB.lastFilm2 = nameOfFilm2
    PersonalMovieDB.lastFilmMark2 = markOfFilm2

    console.log(PersonalMovieDB)
    // как вставить размекту:
    clearDocument()
}



// function inputCountOfFilms(){
//     const numberOfFilms = document.getElementById("numberOfFilms").value;
//     // document.getElementById("result").innerHTML = numberOfFilms;
//     checkNumberOfFilms(numberOfFilms);
//     return numberOfFilms;
// }

////////////////////////////////////////////////////////////////////////

function clearDocument() {
    const questions = document.querySelector('.questions')
    while(questions.firstChild) {
        questions.removeChild(questions.firstChild)
    }
}

function addQuestions() {
    const questions = document.querySelector('.questions')
    questions.insertAdjacentHTML('afterbegin',
    '<p>Один из последних просмотренных фильмов?</p> <p id="result"></p>'
    +'<input type="text" id="nameOfFilm" placeholder="Название фильма">'
    +'<p>На сколько оцените его?</p>'
    +'<input type="number" id="markOfFilm" placeholder="Ваша оценка ему">'
    +'<button id="input" value="Ввод" onclick="inputFilmAndMark()">Bвод</button>')
}

function addQuestions2() {
    const questions = document.querySelector('.questions')
    questions.insertAdjacentHTML('afterbegin',
    '<p>Введите еще один из последних просмотренных фильмов?</p> <p id="result"></p>'
    +'<input type="text" id="nameOfFilm2" placeholder="Название фильма">'
    +'<p>И на сколько оцените его?</p>'
    +'<input type="number" id="markOfFilm2" placeholder="Ваша оценка ему">'
    +'<button id="input" value="Ввод" onclick="inputFilmAndMark2()">Bвод</button>')
}