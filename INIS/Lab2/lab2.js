let PersonalMovieDB = {
    private: true,
    movies: {
        "Побег из БГУИРа": 7,
        "Властелин БГУИРа": 8,
        "Назад в БГУИР": 9
    }
}

function main() {
    addHTMLtable()
}

function addHTMLtable() {
    const questions = document.querySelector('.class')

    if(PersonalMovieDB.private === true){
        questions.insertAdjacentHTML('afterBegin', 
        '<table>'
        +'<tr><td><b>Название фильма</b></td><td><b>Оценка</b></td></tr></h4>'
        +'<tr><td><b id=0></b></td><td id=3></td></tr>'
        +'<br>'
        +'<tr><td><b id=1></b></td><td id=4></td></tr>'
        +'<br>'
        +'<tr><td><b id=2></b></td><td id=5></td></tr>'
        +'</a>'
        +'</table>')
        addValueInTable()
    }
}

function addValueInTable() {
    
    let keys = Object.keys(PersonalMovieDB.movies)

    for (let i = 0, length = keys.length; i < length; i++) {
        document.getElementById(i).innerHTML = keys[i]
        document.getElementById(i+3).innerHTML = PersonalMovieDB.movies[keys[i]]
      }
    
}