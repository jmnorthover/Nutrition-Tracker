import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
  const [search, setSearch] = useState('');

  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search !== '') {
      history.push(`/search/${search}`);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="input-field">
        <input
          placeholder="Search for a food to add..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="centered">
        <button type="submit" className="btn waves-effect waves-light">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
