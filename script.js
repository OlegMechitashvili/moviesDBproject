const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", " ");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Назвіть один з останніх переглянутих фільмів", "");
  let b = +prompt("На скільки балів ви його оціните?", " ");

  if(a !== null && a !== '' && b !== null && b !== '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Переглянуто недостатньо фільмів");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Ви класичний глядач");
} else if (personalMovieDB.count >= 30) {
  console.log("Ви кінман");
} else {
  console.log("Виникла помилка");
}


// console.log(personalMovieDB);
