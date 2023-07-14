import './SearchBar.css';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  let [searchParams, setSearchParams] = useSearchParams('');

  const title = searchParams.get('title');

  // const handleSearch = event => {
  //   setSearchInput(event.target.value);
  //   setSearchParams({title: event.target.value});
  // }

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    setSearchParams({title: event.target.value});  
  }

  const handleClick = () => {
    setSearchParams({title: searchInput});
  }

  return (
    <div className='search-bar'>
      <label>
        <input name='search-input' type='text' placeholder='search movie by...' onChange={event => handleChange(event)} value={title}/>
      </label>
        <button className='search-button' onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;