import './MovieCardContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import getData from '../../apiCalls';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../searchMovies';
import { useSearchParams } from 'react-router-dom';

function MovieCardContainer({getFetchError}) {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getData('/movies')
    .then(data => setMovieData(data.movies))
    .catch(err => getFetchError(err))
  },[])

  let [searchParams] = useSearchParams();
  let title = searchParams.get('title');

  const renderMovieCardContainer = movies => {
    return movies.map(movie => 
      <Link to={`/${movie.id}`} key={movie.id}>
        <MovieCard 
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          average_rating={movie.average_rating}
          release_date={movie.release_date}
        />
      </Link>
    )
  }

  let searchResult = title ? searchMovies(title, movieData) : movieData;
  let movieElements = renderMovieCardContainer(searchResult);


  return (
    <section className='movie_card_section'>
      {movieElements}
    </section>
  );
}

export default MovieCardContainer;

MovieCardContainer.propTypes = {
  getFetchError: PropTypes.func
}