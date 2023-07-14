import './SearchBar.css';

function SearchBar() {
  return (
    <div className='search-bar'>
      <input type='text' placeholder='search movie by...'/>
      <button className='search-button'>Search</button>
    </div>
  );
}

export default SearchBar;