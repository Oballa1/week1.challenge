// Search.js
import React from 'react';
import './index.css';

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search Your Transaction"></input>
      <button className='search button' type="submit">&#128269;</button>
    </div>
  );
}

export default Search;
