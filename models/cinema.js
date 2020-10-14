const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getTitles = function(){

    const result = this.films.map((film) => {
      return film.title
  });
  return result
};

Cinema.prototype.findTitle = function(title){
  const result = this.films.find((film) => {
    return film.title === title;
  });
  return result
}

Cinema.prototype.filterByGenre = function(genre){
  const result = this.films.filter((film) => {
    return film.genre === genre;
  });
  return result
}

Cinema.prototype.findFilmByYear = function(year){
  const result = this.films.some((film) => {
    return film.year === year;
  });
  return result
}

Cinema.prototype.noFilmsByYear = function(year){
  const result = this.films.some((film)=> {
    return film.year === year;
  });
  return result
}

Cinema.prototype.filmByLength = function(length){
  const result = this.films.every((film)=>{
    return film.length > length;
  });
  return result
}


module.exports = Cinema;
