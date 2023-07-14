const searchMovies = (keyword, movieData) => {
  return movieData.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()));
};

export { searchMovies };