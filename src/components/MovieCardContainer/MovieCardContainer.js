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

  const renderNotFound = () => {
    return (
      <div className='no-result-container'>
        <p>Sorry, no matched movie was found. Please try a different keyword.</p>
      </div>
    )
  };

  let [searchParams] = useSearchParams();
  let title = searchParams.get('title');
  let searchResult = title ? searchMovies(title, movieData) : movieData;
  let movieElements = searchResult.length ? renderMovieCardContainer(searchResult) : renderNotFound();


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