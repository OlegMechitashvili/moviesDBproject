const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", " ");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Назвіть один з останніх переглянутих фільмів", "");
const b = +prompt("На скільки балів ви його оціните?", " ");
const c = prompt("Назвіть один з останніх переглянутих фільмів", "");
const d = +prompt("На скільки балів ви його оціните?", " ");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
