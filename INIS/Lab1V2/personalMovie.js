let PersonalMovieDB  = {
    count: undefined,
    lastFilm: undefined,
    lastFilmMark: undefined,

    lastFilm2: undefined,
    lastFilmMark2: undefined
}

function start(){
    fuAlertCount()
    fuAlertLastfilmAndMark()
    fuAlertLastfilmAndMark2()

    console.log(PersonalMovieDB)
}

function fuAlertCount(){
    PersonalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?")
}

function fuAlertLastfilmAndMark(){
    let lastFilm 
    while(!lastFilm|| lastFilm.length > 50){
        lastFilm = prompt("Один из последних просмотренных фильмов?")
    }

    PersonalMovieDB.lastFilmMark = prompt("Ваша оценка ему")
    
    PersonalMovieDB.lastFilm = lastFilm
}

function fuAlertLastfilmAndMark2(){
    let lastFilm 
    while(!lastFilm|| lastFilm.length > 50){
        lastFilm = prompt("Введите еще один из последних просмотренных фильмов?")
    }

    PersonalMovieDB.lastFilmMark2 = prompt("Ваша оценка ему")

    PersonalMovieDB.lastFilm2 = lastFilm
}