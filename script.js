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



// console.log(personalMovieDB);
