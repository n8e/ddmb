import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search friends..."
        onChange={props.handleChange}
        value={props.param}
      />
    </div>
  );
}

export default Search;