import './App.css';
import Header from '../Header/Header';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import SingleMovie from '../SingleMovie/SingleMovie';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [fetchError, setFetchError] = useState(false);
 
  function getFetchError(response) {
    setFetchError(response);
  }

  return (
    <Routes>
      <Route path='/' element={fetchError ? <ErrorDisplay fetchError={fetchError}/> : <><Header /><MovieCardContainer getFetchError={getFetchError}/></>}/>
      <Route path='/:id' element={fetchError ? <ErrorDisplay fetchError={fetchError}/> : <SingleMovie getFetchError={getFetchError}/>}/>
      <Route path='*' element={<ErrorDisplay />} />
    </Routes>
  );
}

export default App;
